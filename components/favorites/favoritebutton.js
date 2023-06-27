import { ReactComponent as Heart } from "./heart.svg";
import { ReactComponent as HeartUnfilled } from "./heart-unfilled.svg";
//import "./FavButton.css";

export default function FavoriteButton({ piece, slug, onToggleFavorite }) {
  return (
    <div>
      <button
        className="favorite-button"
        type="button"
        onClick={() => onToggleFavorite(slug)}
        aria-label="favorite"
      >
        {piece.isFavorite === true ? "isFavorite" : "isNotFavorite"}
        {/* {piece.isFavorite === true ? <Heart /> : <HeartUnfilled />} */}
      </button>
    </div>
  );
}
