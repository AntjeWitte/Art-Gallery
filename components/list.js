import ListElements from "./listelements";

export default function List({ pieces }) {
  console.log("Pieces:", pieces);
  return (
    <>
      <ListElements pieces={pieces} />
    </>
  );
}
