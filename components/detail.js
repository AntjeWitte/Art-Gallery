import Image from "next/image";
import Link from "next/link";
import EntryForm from "./commentform";

export default function Detail({ currentArt, onAddEntry, onDeleteEntry }) {
  if (currentArt === undefined) return null;

  return (
    <article>
      <ul>
        <li key={currentArt.slug}>
          <h2>{currentArt.name}</h2>
          <Image
            src={currentArt.imageSource}
            alt={currentArt.name}
            width={140}
            height={230}
          />
          <p>{currentArt.artist}</p>
          <p>{currentArt.year}</p>
          <p>{currentArt.genre}</p>
          <EntryForm
            onAddEntry={onAddEntry}
            onDeleteEntry={onDeleteEntry}
            currentArt={currentArt}
          />
          <Link href={`/artpieces`}>Zurück zur Liste</Link>
        </li>
      </ul>
    </article>
  );
}
