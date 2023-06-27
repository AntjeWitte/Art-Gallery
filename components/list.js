import ListElements from "./listelements";

export default function List({ pieces, onToggleFavorite }) {
  console.log("Pieces:", pieces);
  return (
    <>
      <ListElements pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
