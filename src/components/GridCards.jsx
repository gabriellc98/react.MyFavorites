import { FavoriteCard } from "./FavoriteCard";
import { FavoriteTypeTitle } from "./FavoriteType";
import { FAVORITE_TYPE_NAMES } from "../shared/my-favorites.store";
import { useStore } from "@nanostores/react";
import { $selectedTab } from "../shared/my-favorites.store";

export function GridCards({ favorites, removeFavorite }) {
  const selectedTab = useStore($selectedTab);
  return (
    <div className="w-400 max-w-11/12 m-auto space-y-4">
      {selectedTab !== FAVORITE_TYPE_NAMES.ALL ? (
        <>
          <FavoriteTypeTitle type={{ name: selectedTab }} />
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-2">
            {favorites.map(
              (favorite) =>
                favorite.type.name === selectedTab && (
                  <FavoriteCard
                    key={favorite.id}
                    favorite={favorite}
                    removeFavorite={removeFavorite}
                  />
                ),
            )}
          </div>
        </>
      ) : (
        <>
          <FavoriteTypeTitle type={{ name: selectedTab }} />
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-2">
            {favorites.map((favorite) => (
              <FavoriteCard
                key={favorite.id}
                favorite={favorite}
                removeFavorite={removeFavorite}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
