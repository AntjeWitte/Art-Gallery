import Image from "next/image";
import Link from "next/link";
import EntryForm from "./commentform";
//import { useRouter } from "next/router";

export default function Detail({ pieces, onAddEntry, entries }) {
  console.log("Arraylänge", pieces);
  //   const router = useRouter();
  //   const { spotlight } = router.query;
  if (pieces === undefined) return null;

  return (
    <article>
      <ul>
        <li key={pieces.slug}>
          <h2>{pieces.name}</h2>
          <Image
            src={pieces.imageSource}
            alt={pieces.name}
            width={140}
            height={230}
          />
          <p>{pieces.artist}</p>
          <p>{pieces.year}</p>
          <p>{pieces.genre}</p>
          <EntryForm onAddEntry={onAddEntry} entries={entries} />
          <Link href={`/artpieces`}>Zurück zur Liste</Link>
        </li>
      </ul>
    </article>
  );
}
