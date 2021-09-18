import { Link } from "react-router-dom";

const Result = ({ myChoiceS, houseChoiceS, winnerIs }) => {
  const myChoice = myChoiceS.toLowerCase();
  const houseChoice = houseChoiceS.toLowerCase();

  return (
    <div className="result">
      <div>
        <h3>You picked</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icon-${myChoice}.svg`}
          alt={myChoice}
        />
      </div>
      <div>
        <h2>{winnerIs}</h2>
        <Link to="/">
          <button>Play Again</button>
        </Link>
      </div>

      <div>
        <h3>House picked</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icon-${houseChoice}.svg`}
          alt={houseChoice}
        />
      </div>
    </div>
  );
};

export default Result;
