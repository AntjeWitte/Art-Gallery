import Image from "next/image";
import FavoriteButton from "./favoritebutton";

export default function Favorites({ pieces, onToggleFavorite }) {
  if (pieces === undefined) return null;
  const likedArt = pieces.filter((fav) => {
    return fav.isFavorite === true;
  });

  console.log("FavPieces:", pieces);

  return (
    <article>
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
                width={140}
                height={230}
              />
              <p>{favorite.artist}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
