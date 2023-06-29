import Favorites from "../../components/favorites/favorites";

export default function FavoritesList({ pieces, onToggleFavorite }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Favorites pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
