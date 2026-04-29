import { persistentAtom } from "@nanostores/persistent";

export const STORAGE_KEY = "my-favorites-items";

export const FAVORITE_TYPE_NAMES = {
  ALL: "All",
  FILM: "Film",
  TV_SHOW: "TV Show",
  BOOK: "Book",
};

export const favoriteTypeOptions = [
  { id: 1, name: FAVORITE_TYPE_NAMES.FILM },
  { id: 2, name: FAVORITE_TYPE_NAMES.TV_SHOW },
  { id: 3, name: FAVORITE_TYPE_NAMES.BOOK },
];

export const $selectedTab = persistentAtom(
  "my-favorites-selected-tab",
  FAVORITE_TYPE_NAMES.ALL,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

// export const $allFavorites = persistentAtom(
//   STORAGE_KEY,
//   JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
//   {
//     encode: JSON.stringify,
//     decode: JSON.parse,
//   },
// );
