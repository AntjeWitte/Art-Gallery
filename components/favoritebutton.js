import { ReactComponent as Heart } from "../public/assets/heart.svg";

export default function FavoriteButton({ slug, favorites, onToggleFavorite }) {
  if (favorites === undefined) return null;
  const fav = favorites.isFavorite;
  return (
    <button
      className="favorite-button"
      onClick={() => onToggleFavorite(slug)}
      aria-label="favorite"
    >
      if (favorites === undefined) return null;
      {fav === true ? <Heart /> : <Heart />}
      {fav ? "🤣" : "😒"}
    </button>
  );
}
