import GlobalStyle from "../styles";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const [art, setArt] = useState();

  useEffect(() => {
    async function loadArt() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setArt(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadArt();
  }, []);

  const [entries, setEntries] = useLocalStorageState("comments:", {
    defaultValue: [],
  });

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
  }
  //   const detailPiece = pieces.find((artPiece) => {
  //     artPiece.slug === slug;
  //   });
  //   if (detailPiece === true) {
  //     setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
  //   } else setEntries(entries);
  // }

  function handleDeleteEntry(id) {
    setEntries(entries.filter((entry) => (entry.id === id ? false : true)));
  }

  const [favorites, setFavorite] = useState(art);

  function handleToggleFavorite(slug) {
    setFavorite((favorite) => {
      const info = favorite.find((info) => info.slug === slug);
      if (info) {
        return favorite.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...favorite, { slug, isFavorite: true }];
    });
  }

  const info = favorites?.find((info) => info.slug === slug) ?? {
    isFavorite: false,
  };
  const { isFavorite } = info;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={art}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
        onAddEntry={handleAddEntry}
        onDeleteEntry={handleDeleteEntry}
        entries={entries}
      />
      <Navigation />
    </>
  );
}
