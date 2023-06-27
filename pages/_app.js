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

  console.log("art", art);

  function handleAddEntry(currentArt, newComment) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    const newArt = art.map((artPiece) => {
      if (currentArt.slug !== artPiece.slug) {
        return artPiece;
      }

      const newCommentWithDateAndId = {
        ...newComment,
        date,
        id: uid(),
      };

      return {
        ...artPiece,
        comments: [...(artPiece.comments ?? []), newCommentWithDateAndId],
      };
    });
    setArt(newArt);
  }

  function handleDeleteEntry(commentId) {
    // setArt(art.filter((artPiece) => (artPiece.comments.id === commentId ? false : true)));
    // setArt(art.filter((artPiece) => (artPiece.comments.id !== commentId ? true : false)));

    const newArt = art.map((artPiece) => ({
      ...artPiece,
      comments: artPiece.comments?.filter(
        (comment) => comment.id !== commentId
      ),
      // das selbe wie:
      // comments: artPiece.comments.filter(({ id }) => id !== commentId)
    }));

    setArt(newArt);
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
  // const isFavorite = info.isFavorite

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
      />
      <Navigation />
    </>
  );
}
