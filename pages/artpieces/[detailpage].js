import Spotlight from "../../components/spotlight";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Spotpage() {
  const router = useRouter();
  const { spotpage } = router.query;
  //console.log("SpotArray:", pieces);

  const URL = "https://example-apis.vercel.app/api/art";
  const [pieces, setPieces] = useState();

  useEffect(() => {
    async function loadPiece() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPieces(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPiece();
  }, []);

  if (pieces === undefined) return null;
  const currentArt = pieces.find((piece) => piece.slug === spotpage);
  console.log("CurrentArt", currentArt);
  return (
    <div>
      <Spotlight pieces={currentArt} />
    </div>
  );
}
