import Image from "next/image";
import FavoriteButton from "./favoritebutton";

export default function Favorites({ favorites }) {
  if (favorites === undefined) return null;
  const likedArt = favorites.map((fav) =>
    fav.isFavorite === true ? { ...fav } : null
  );

  return (
    <article>
      <ul>
        {likedArt?.map((favorite) => {
          return (
            <li key={favorite.slug}>
              <h2>{favorite.name}</h2>
              <FavoriteButton slug={favorite.slug} />
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
