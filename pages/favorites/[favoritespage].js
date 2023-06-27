import Favorites from "../../components/detail";
import { useRouter } from "next/router";

export default function Detailpage({ pieces, onToggleFavorite }) {
  const router = useRouter();
  const { favoritespage } = router.query;
  //console.log("SpotArray:", pieces);

  return (
    <div>
      <Favorites pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
