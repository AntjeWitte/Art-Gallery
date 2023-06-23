import Detail from "../../components/detail";
import { useRouter } from "next/router";

export default function Detailpage({ pieces, onAddEntry, entries }) {
  const router = useRouter();
  const { detailpage } = router.query;
  //console.log("SpotArray:", pieces);
  if (pieces === undefined) return null;
  const currentArt = pieces?.find((piece) => piece.slug === detailpage);

  console.log("CurrentArt", currentArt);
  return (
    <div>
      <Detail pieces={currentArt} onAddEntry={onAddEntry} entries={entries} />
    </div>
  );
}
