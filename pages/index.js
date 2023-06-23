import Spotlight from "../components/spotlight";

export default function HomePage({ pieces }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight pieces={pieces} />
    </div>
  );
}
