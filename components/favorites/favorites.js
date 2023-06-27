import Image from "next/image";
import FavoriteButton from "./favoritebutton";

export default function Favorites({ pieces, onToggleFavorite }) {
  if (pieces === undefined) return null;
  const likedArt = pieces.filter((fav) => {
    return fav.isFavorite === true;
  });

  console.log("likedArt:", likedArt);

  return (
    <article>
      <h2>Your favorites: </h2>
      <ul>
        {likedArt.map((favorite) => {
          return (
            <li key={favorite.slug}>
              <h2>{favorite.name}</h2>
              <FavoriteButton
                slug={favorite.slug}
                pieces={pieces}
                onToggleFavorite={onToggleFavorite}
              />
              <Image
                src={favorite.imageSource}
                alt={favorite.name}
                width={240}
                height={230}
              />
              <p>{favorite.artist}</p>
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
