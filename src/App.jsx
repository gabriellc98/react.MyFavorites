import "./App.css";
import { Banner } from "./components/Banner";
import { FavoriteCard } from "./components/FavoriteCard";
import { FavoriteForm } from "./components/FavoriteForm";
import { FavoriteTypeTitle } from "./components/FavoriteType";
import { useEffect, useState } from "react";
import {
  FAVORITE_TYPE_NAMES,
  favoriteTypeOptions,
} from "./shared/my-favorites.store";
import { HeaderNavigation } from "./components/HeaderNavigation";
import { loadFavorites, saveFavorites } from "./shared/my-favorites.service";
import { GridCards } from "./components/GridCards";

export default function App() {
  const [favorites, setFavorites] = useState(() => loadFavorites());
  const [selectedTab, setSelectedTab] = useState("All");

  useEffect(() => {
    console.log("FAVORITES UPDATED", favorites);
    saveFavorites(favorites);
  }, [favorites]);

  function addFavorite(newFavorite) {
    setFavorites([...favorites, newFavorite]);
  }

  function removeFavorite(favoriteToRemove) {
    console.log("Removing favorite", favoriteToRemove);
    setFavorites(
      favorites.filter((favorite) => favorite.id !== favoriteToRemove.id),
    );
  }

  return (
    <main>
      {/* <Banner /> */}
      <FavoriteForm types={favoriteTypeOptions} addFavorite={addFavorite} />
      <HeaderNavigation
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
      <GridCards
        types={favoriteTypeOptions}
        favorites={favorites}
        removeFavorite={removeFavorite}
      />
    </main>
  );
}
