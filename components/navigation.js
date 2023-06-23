import Link from "next/link";

export default function Navigation() {
  return (
    <article>
      <Link href={`/`}>Spotlight</Link>
      <Link href={`/artpieces`}>Art Pieces</Link>
      <Link href={`/favorites`}>Favorites</Link>
    </article>
  );
}
