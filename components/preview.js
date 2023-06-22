export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article className="entry">
      <title className="entry__date">{title}</title>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <img>{image}</img>
          </h2>
          {/* <FavoriteButton
            id={id}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          /> */}
        </div>
        <p className="entry__notes">{artist}</p>
      </div>
    </article>
  );
}
