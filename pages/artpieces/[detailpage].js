import Detail from "../../components/detail";
import { useRouter } from "next/router";

export default function Detailpage({
  pieces,
  onAddEntry,
  onDeleteEntry,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { detailpage } = router.query;
  console.log("SpotArray:", pieces);
  if (pieces === undefined) return null;
  const currentArt = pieces?.find((piece) => piece.slug === detailpage);

  console.log("CurrentArt", currentArt);
  return (
    <div>
      <Detail
        currentArt={currentArt}
        onAddEntry={onAddEntry}
        onDeleteEntry={onDeleteEntry}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
