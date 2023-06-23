import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./favoritebutton";

export default function ArtPiecePreview({ pieces }) {
  return (
    <article className="entry">
      <ul>
        {pieces?.map((piece) => {
          return (
            <li key={piece.slug}>
              <h2>{piece.name}</h2>
              <FavoriteButton slug={piece.slug} />
              <Image
                src={piece.imageSource}
                alt={piece.name}
                width={140}
                height={230}
              />
              <p>{piece.artist}</p>
              <Link href={`/artpieces/${piece.slug}`}>Weitere Details</Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
