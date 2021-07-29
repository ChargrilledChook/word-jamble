import "../styles/Title.css";
import "../styles/generalStyles.css";
import { Link } from "react-router-dom";

function Title() {
  return (
    <main className="title-screen">
      <h1>Word Jamble</h1>
      <p>Unjamble the words and improve your vocabulary!</p>

      <Link to="/play">
        {" "}
        <button className="button">Play</button>
      </Link>
    </main>
  );
}

export default Title;
