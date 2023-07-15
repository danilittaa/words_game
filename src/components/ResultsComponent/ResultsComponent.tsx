import { FC } from "react";
import "./ResultsComponent.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "hook";

interface ResultsComponentProps {
  outcome: DuelOutcome;
}

const ResultsComponent: FC<ResultsComponentProps> = ({ outcome }) => {
  const { user } = useAppSelector((store) => store.user);
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
          <p className="results__result">{outcome.outcome}</p>
          <div className="results__score">
            <p className="results__score__left">Your score:</p>
            <p className="results__score__right">
              {user.exp}
              <span>+{outcome.exp_gained}</span>
            </p>
            <p className="results__score__total">total: {user.exp}</p>
            {/* ?? */}
          </div>
          <div className="results__achievements">
            <div className="results__achievements__name">
              <p>words learned</p>
              {/* <p>+{outcome.correct_answers}</p> */}
            </div>
            <div className="results__achievements__points">
              {outcome.correct_answers}/{outcome.questions_number}
            </div>
            <div className="results__achievements__inner"></div>
          </div>
          <div className="results__buttons">
            <Link to="/">
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
