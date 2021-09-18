import { Link } from "react-router-dom";

const Buttons = ({ restart }) => {
  return (
    <div className="buttons">
      <Link to="/">
        <button onClick={restart}>Restart</button>
      </Link>
      <Link to="/rules">
        <button>Rules</button>
      </Link>
    </div>
  );
};

export default Buttons;
