import { X } from "lucide-react";
import { StarRating } from "./StarRating";
import { RemoveCardDialog } from "./RemoveCardDialog";

export function FavoriteCard({ favorite, removeFavorite }) {
  return (
    <div className="bg-[#241935] rounded-2xl p-4 shadow-lg hover:scale-105 transition w-full h-full">
      <div className="relative bg-[#241935] rounded-xl mb-4 flex items-center justify-center text-[#8F8596]">
        <img
          className="max-w-40 max-h-60 object-cover rounded-xl"
          src={favorite.cover}
          alt={favorite.name}
        />
        <RemoveCardDialog favorite={favorite} removeFavorite={removeFavorite} />
        {/* <button
          className="absolute top-2 right-2 rounded-full p-1 hover:bg-black/80"
          onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to remove ${favorite.name} ${favorite.type.name}?`,
              )
            ) {
              removeFavorite(favorite);
            }
          }}
        >
          <X size={20} />
        </button> */}
      </div>

      <div className="px-2 items-start gap-2">
        <h2 className="text-lg font-semibold text-[#CFC6B8] wrap-break-word line-clamp-2">
          {favorite.name}
        </h2>
        <p className="text-sm text-[#8F8596]">{favorite.type.name}</p>
        <div className="flex items-center justify-between">
          <StarRating rating={favorite.rating} />
        </div>
      </div>
    </div>
  );
}
// break-words
