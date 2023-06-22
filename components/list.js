import ArtPiecePreview from "./preview";

export default function List({ pieces }) {
  console.log("Pieces:", pieces);
  return (
    <>
      <ArtPiecePreview pieces={pieces} />
    </>
  );
}
