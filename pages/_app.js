import GlobalStyle from "../styles";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./app.css";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const [art, setArt] = useLocalStorageState("artPieces", { defaultValue: [] });

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

  function handleToggleFavorite(slug) {
    const newFavorite = art.map((artPiece) => {
      if (slug !== artPiece.slug) {
        return artPiece;
      }
      return {
        ...artPiece,
        isFavorite: !artPiece.isFavorite,
      };
    });
    setArt(newFavorite);
  }

  return (
    <>
      <div className="app">
        <main className="app__main">
          <GlobalStyle />
          <Component
            {...pageProps}
            pieces={art}
            onToggleFavorite={handleToggleFavorite}
            onAddEntry={handleAddEntry}
            onDeleteEntry={handleDeleteEntry}
          />
          <Navigation />
        </main>
      </div>
    </>
  );
}
