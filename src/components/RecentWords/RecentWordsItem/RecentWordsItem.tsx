import { FC } from "react";
import { Translation, Word } from "types/word";

interface RecentWordsItemProps {
  word: Word;
  translation: Translation;
}

const RecentWordsItem: FC<RecentWordsItemProps> = ({ word, translation }) => {
  return (
    <div className="recent-words__item">
      <p className="recent-words__item__eng">{word.text}</p>
      <p className="recent-words__item__ukr">{translation.text}</p>
    </div>
  );
};

export default RecentWordsItem;
