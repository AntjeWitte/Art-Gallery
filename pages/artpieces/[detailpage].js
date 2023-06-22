import Detail from "../../components/detail";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Detailpage() {
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

  const router = useRouter();
  const { detailpage } = router.query;
  //console.log("SpotArray:", pieces);
  if (pieces === undefined) return null;
  const currentArt = pieces?.find((piece) => piece.slug === detailpage);

  console.log("CurrentArt", currentArt);
  return (
    <div>
      <Detail pieces={currentArt} />
    </div>
  );
}
