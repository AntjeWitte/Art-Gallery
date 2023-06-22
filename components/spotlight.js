import Image from "next/image";
import { useRouter } from "next/router";

export default function Spotlight({ pieces }) {
  console.log("Arraylänge", pieces);
  const router = useRouter();
  const { spotlight } = router.query;
  if (pieces === undefined) return null;

  const randomArt = Math.floor(Math.random() * pieces.length);
  return (
    <article>
      <ul>
        <li key={pieces[randomArt].slug}>
          <h2>{pieces[randomArt].name}</h2>
          <Image
            src={pieces[randomArt].imageSource}
            alt={pieces[randomArt].name}
            width={140}
            height={230}
          />
          <p>{pieces[randomArt].artist}</p>
        </li>
      </ul>
    </article>
  );
}
