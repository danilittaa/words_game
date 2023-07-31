import { FC } from "react";
import "./LevelResult.scss";

interface LevelResultProps {
  duelQuestionResult: DuelQuestionResult;
}

const LevelResult: FC<LevelResultProps> = ({ duelQuestionResult }) => {
  const opponentChoice =
    duelQuestionResult.answers?.opponent?.choice?.text || "???";
  const myChoice = duelQuestionResult.answers?.me?.choice?.text || "???";

  return (
    <div className="level-result">
      <div className="level-result__container">
        <div
          className={`level-result__${
            duelQuestionResult.answers?.opponent?.correct ? "right" : "wrong"
          } level-result__word ${
            opponentChoice.length >= 15
              ? "level-result__very_long"
              : opponentChoice.length >= 10
              ? "level-result__long"
              : ""
          }`}
        >
          {opponentChoice}
        </div>
        <div className="level-result__correct-option">
          The correct answer is: <br />{" "}
          <span
            className={opponentChoice.length >= 10 ? "level-result__long" : ""}
          >
            {duelQuestionResult.correct_choice.text}
          </span>
        </div>
        <div
          className={`level-result__${
            duelQuestionResult.answers?.me?.correct ? "right" : "wrong"
          } level-result__word ${
            opponentChoice.length >= 10 ? "level-result__long" : ""
          }`}
        >
          {myChoice}
        </div>
      </div>
    </div>
  );
};

export default LevelResult;
