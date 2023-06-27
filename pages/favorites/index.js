import Favorites from "../../components/favorites/favorites";

export default function ArtList({ favorites }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Favorites favorites={favorites} />
    </div>
  );
}
