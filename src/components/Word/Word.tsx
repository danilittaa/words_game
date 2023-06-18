import { FC, useState } from "react";
import "./Word.scss";

interface WordProps {
  front: string;
  back: string;
}
const Word: FC<WordProps> = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className={`word pointer ${isFlipped ? "wordFlip" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <p className="word__front ">{front}</p>
      <p className="word__back">{back}</p>
    </div>
  );
};

export default Word;
