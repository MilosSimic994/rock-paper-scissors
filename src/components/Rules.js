import React from "react";
import { Link } from "react-router-dom";
import rules from "../images/image-rules.svg";

const Rules = () => {
  return (
    <Link to="/">
      <section className="modal">
        <img src={rules} alt="rules" />
      </section>
    </Link>
  );
};

export default Rules;
