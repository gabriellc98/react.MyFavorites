import { FavoriteCard } from "./FavoriteCard";
import { FavoriteTypeTitle } from "./FavoriteType";
import { FAVORITE_TYPE_NAMES } from "../shared/my-favorites.store";

export function GridCards({ types, favorites, removeFavorite }) {
  return (
    <div className="w-400 max-w-11/12 m-auto space-y-4">
      {/* {selectedTab !== FAVORITE_TYPE_NAMES.ALL &&
        (favorites = favorites.filter(
          (favorite) => favorite.type.name === selectedTab,
        ))} */}
      {types.map(
        (type) =>
          favorites.some((favorite) => favorite.type.id === type.id) && (
            <section key={type.id}>
              <FavoriteTypeTitle type={type} />
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-2">
                {favorites.map(
                  (favorite) =>
                    favorite.type.id === type.id && (
                      <FavoriteCard
                        key={favorite.id}
                        favorite={favorite}
                        removeFavorite={removeFavorite}
                      />
                    ),
                )}
              </div>
            </section>
          ),
      )}
    </div>
  );
}

// // "flex flex-row flex-wrap gap-6 py-2"
