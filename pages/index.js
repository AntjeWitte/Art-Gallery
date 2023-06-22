import { useState, useEffect } from "react";
import List from "../../components/list";

export default function HomePage() {
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
    console.log({ art });
  }, []);

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <List pieces={art} />
    </div>
  );
}
