import { FAVORITE_TYPE_NAMES } from "../shared/my-favorites.store";
import { useStore } from "@nanostores/react";
import { $selectedTab } from "../shared/my-favorites.store";

export function HeaderNavigation() {
  const selectedTab = useStore($selectedTab);
  return (
    <header className="flex justify-between items-center mt-4 mb-2 w-400 max-w-11/12 m-auto space-y-6">
      <h1 className="text-3xl font-bold text-[#F6C667]">My Favorites</h1>
      <div className="flex gap-6 text-[#CFC6B8]">
        {[
          FAVORITE_TYPE_NAMES.ALL,
          FAVORITE_TYPE_NAMES.FILM,
          FAVORITE_TYPE_NAMES.TV_SHOW,
          FAVORITE_TYPE_NAMES.BOOK,
        ].map((tab) => (
          <button
            key={tab}
            className={`cursor-pointer px-3 py-1 rounded-full text-sm border ${
              selectedTab === tab
                ? "bg-[#F6C667] text-[#140F1F] border-[#F6C667]"
                : "hover:text-[#FFDD87]"
            }`}
            onClick={() => $selectedTab.set(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </header>
  );
}
