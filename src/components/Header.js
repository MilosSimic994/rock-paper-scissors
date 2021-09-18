const Header = ({ myScore, houseScore }) => {
  return (
    <header className="header">
      <ul>
        <li>rock</li>
        <li>paper</li>
        <li>scissors</li>
      </ul>
      <article>
        <h4>score</h4>
        <div className="score-contole">{`${myScore} : ${houseScore}`}</div>
      </article>
    </header>
  );
};

export default Header;
