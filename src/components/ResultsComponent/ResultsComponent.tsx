import { FC, useEffect, useState } from "react";
import "./ResultsComponent.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "hook";

interface ResultsComponentProps {
  outcome: DuelOutcome;
}

const ResultsComponent: FC<ResultsComponentProps> = ({ outcome }) => {
  const { user } = useAppSelector((store) => store.user);
  const [stars, setStars] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (outcome.outcome === "victory") {
      switch (outcome.correct_answers) {
        case 5:
          setStars(5);
          break;
        case 4:
          setStars(3);
          break;
        case 3:
          setStars(3);
          break;
        case 2:
          setStars(3);
          break;
        case 1:
          setStars(1);
          break;
      }
    }
  }, [outcome]);

  return (
    <div className="results">
      <div className="results__back">
        {[...Array(stars)].map((_, index) => (
          <img
            src="/images/additional/star.svg"
            alt="star"
            className="results__star"
            key={index}
          />
        ))}
        <div className="results__front">
          <p className="results__result">{outcome.outcome}</p>
          <div className="results__score">
            <p className="results__score__left">Your score:</p>
            <p className="results__score__right">
              {user.exp}
              <span>+{outcome.exp_gained}</span>
            </p>
            <p className="results__score__total">
              total: {user.exp + outcome.exp_gained}
            </p>
          </div>
          <div className="results__achievements">
            <div className="results__achievements__name">
              <p>words guessed</p>
            </div>
            <div className="results__achievements__points">
              {outcome.correct_answers}/{outcome.questions_number}
            </div>
            <div
              className="results__achievements__inner"
              style={{
                width:
                  (outcome.correct_answers * 100) / outcome.questions_number +
                  "%",
              }}
            ></div>
          </div>
          <div className="results__buttons">
            <Link to="/">
              <img
                src="/images/buttons/left.svg"
                alt="home button"
                className="results__buttons__button"
              />
            </Link>
            <div
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  navigate("/battle");
                }, 100);
              }}
            >
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
