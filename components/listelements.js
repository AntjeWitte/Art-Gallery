import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./favorites/favoritebutton";

export default function ListElements({ pieces, onToggleFavorite }) {
  return (
    <article className="entry">
      <ul>
        {pieces?.map((piece) => {
          return (
            <li key={piece.slug}>
              <h2>{piece.name}</h2>
              <FavoriteButton
                slug={piece.slug}
                onToggleFavorite={onToggleFavorite}
                piece={piece}
              />
              <br></br>
              <Image
                src={piece.imageSource}
                alt={piece.name}
                width={240}
                height={230}
              />
              <p>{piece.artist}</p>
              <Link href={`/artpieces/${piece.slug}`}>Weitere Details</Link>
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
