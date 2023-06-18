import { FC } from "react";
import "./ResultsComponent.scss";
import { Link } from "react-router-dom";

const ResultsComponent: FC = () => {
  return (
    <div className="results">
      <div className="results__back">
        <div>
          <img
            src="/images/additional/star.svg"
            alt="star"
            className="results__star"
          />
          <img
            src="/images/additional/star.svg"
            alt="star"
            className="results__star"
          />
          <img
            src="/images/additional/star.svg"
            alt="star"
            className="results__star"
          />
          <img
            src="/images/additional/star.svg"
            alt="star"
            className="results__star"
          />
          <img
            src="/images/additional/star.svg"
            alt="star"
            className="results__star"
          />
        </div>
        <div className="results__front">
          <p className="results__result">you win!</p>
          <div className="results__score">
            <p className="results__score__left">Your score:</p>
            <p className="results__score__right">
              1190<span>+100</span>
            </p>
            <p className="results__score__total">total: 1290</p>
          </div>
          <div className="results__achievements">
            <div className="results__achievements__name">
              <p>learn 5 new words</p>
              <p>+2</p>
            </div>
            <div className="results__achievements__points">3/5</div>
            <div className="results__achievements__inner"></div>
          </div>
          <div className="results__buttons">
            <Link to="/home">
              <img
                src="/images/buttons/left.svg"
                alt="home button"
                className="results__buttons__button"
              />
            </Link>
            <div className="">мау</div>
            <div>
              <img
                src="/images/buttons/right.svg"
                alt="next button"
                className="results__buttons__button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent;
