import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function EntryForm({
  onAddEntry,
  entries,
  currentArt,
  onDeleteEntry,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
    console.log("Data: ", data);
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">Comments:</h2>
      <div className="entry-form__fields">
        {entries?.map((entry) => (
          <div key={entry.id}>
            <p>{entry.date}</p>
            <p>{entry.notes}</p>
            <button
              type="button"
              title="delete movie"
              onClick={() => onDeleteEntry(entry.id)}
            >
              ✕
            </button>
            <hr></hr>
          </div>
        ))}
        <div className="entry-form__field">
          <label htmlFor="notes">Add new comment:</label>
          <br></br>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  );
}
