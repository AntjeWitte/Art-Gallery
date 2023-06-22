import Image from "next/image";
//import { useRouter } from "next/router";

export default function Detail({ pieces }) {
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
        </li>
      </ul>
    </article>
  );
}
