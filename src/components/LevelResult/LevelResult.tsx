import "./LevelResult.scss";

const LevelResult = () => {
  return (
    <div className="level-result">
      <div className="level-result__container">
        <div className="level-result__enemy level-result__word">мау</div>
        <div className="level-result__correct-option">
          The correct answer is: <br /> <span>яблуко</span>
        </div>
        <div className="level-result__you level-result__word">яблуко</div>
      </div>
    </div>
  );
};

export default LevelResult;
