import List from "../../components/list";

export default function ArtList({
  pieces,
  onAddEntry,
  entries,
  onDeleteEntry,
}) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <List
        pieces={pieces}
        onAddEntry={onAddEntry}
        onDeleteEntry={onDeleteEntry}
        entries={entries}
      />
    </div>
  );
}
