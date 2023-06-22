import List from "../../components/list";
import { useState, useEffect } from "react";

export default function ArtList({ pieces }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const [art, setArt] = useState();

  useEffect(() => {
    async function loadArt() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setArt(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadArt();
  }, []);
  console.log("Art:", art);

  return (
    <div>
      <h1>Art Gallery</h1>
      <List pieces={art} />
    </div>
  );
}
