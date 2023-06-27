import Favorites from "../../components/favorites/favorites";
import { useRouter } from "next/router";

export default function Favoritespage({ pieces, onToggleFavorite }) {
  const router = useRouter();
  const { favoritespage } = router.query;
  //console.log("SpotArray:", pieces);

  return (
    <div>
      <p>Favoritespage: {favoritespage}</p>
      <Favorites pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
