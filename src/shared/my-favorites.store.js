import { atom, computed } from "nanostores";

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

const $favoritesAtom = atom([]);

export const $favoritesStore = computed($favoritesAtom, (favorites) => {
  return favorites;
});
