import { useRef } from "react";
import { X } from "lucide-react";

export function RemoveCardDialog({ favorite, removeFavorite }) {
  // Não devemos fazer buscas no DOM usando document.querySelector ou similares em React,
  // pois isso pode levar a problemas de sincronização e manutenção.
  // Em vez disso, devemos usar refs para acessar elementos DOM de forma
  // segura e eficiente dentro do ciclo de vida do componente.
  // const dialog = document.querySelector("dialog");

  const dialogRef = useRef(null);

  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <button
        className="absolute top-2 right-2 rounded-full p-1 hover:bg-black/80 cursor-pointer"
        onClick={openDialog}
      >
        <X size={20} />
      </button>
      <dialog
        className="my-dialog bg-[#553e78] text-[#c8b8d4] text-lg border border-[#8F8596] w-160 rounded-2xl p-4 shadow-lg fixed top-2/4 left-2/4 -translate-1/2"
        ref={dialogRef}
      >
        <p className="wrap-break-word">
          Are you sure you want to remove {favorite.name} from{" "}
          {favorite.type.name} list?
        </p>
        <div className="flex items-center justify-end gap-4 mt-4">
          <button
            className="hover:text-white rounded-md px-3 py-1 cursor-pointer"
            onClick={() => {
              removeFavorite(favorite);
              closeDialog();
            }}
          >
            Yes
          </button>
          <button
            className="hover:text-white rounded-md px-3 py-1 cursor-pointer"
            autoFocus
            onClick={closeDialog}
          >
            No
          </button>
        </div>
      </dialog>
    </>
  );
}
