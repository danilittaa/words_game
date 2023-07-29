import { FC, useEffect, useState } from "react";
import "./BattleComponent.scss";
import { axiosWithAuth } from "axiosConfig";

interface BattleComponentProps {
  duelQuestionMessage: DuelQuestion | undefined;
  seconds: number;
}

const BattleComponent: FC<BattleComponentProps> = ({
  duelQuestionMessage,
  seconds,
}) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number>();
  const [timer, setTimer] = useState<number>(seconds);

  const handleClick = (item: DuelQuestionChoice) => {
    setSelectedAnswerId(item.id);
  };

  useEffect(() => {
    if (selectedAnswerId) {
      try {
        axiosWithAuth.post("/duels/answer-question/", {
          choice_id: selectedAnswerId,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [selectedAnswerId]);

  useEffect(() => {
    const timerFunc = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerFunc);
  }, [timer]);
  return (
    <>
      <div className="battle">
        <div className="battle__task">
          <div className="battle__task__title">
            Choose the correct translation
          </div>
          <div className="battle__task__time">{timer} seconds left</div>
          <div className="battle__task__word">{duelQuestionMessage?.text}</div>
          <div className="battle__task__options">
            {duelQuestionMessage?.choices.map((item: DuelQuestionChoice) => (
              <p
                key={item.id}
                onClick={() => handleClick(item)}
                className={`
              ${
                item.id === selectedAnswerId
                  ? "battle__task__options__selected"
                  : ""
              } ${
                  item.text.length >= 15
                    ? "battle__task__options__very_long"
                    : item.text.length >= 10
                    ? "battle__task__options__long"
                    : ""
                } pointer
            `}
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BattleComponent;
