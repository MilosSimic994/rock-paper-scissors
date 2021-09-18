import { useState } from "react";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

const Choice = () => {
  const [myChoice, setMyChoice] = useState("");
  const [houseChoice, setHouseChoice] = useState("");

  return (
    <div>
      <img src={paper} alt="paper" />
      <img src={rock} alt="paper" />
      <img src={scissors} alt="paper" />
    </div>
  );
};

export default Choice;
