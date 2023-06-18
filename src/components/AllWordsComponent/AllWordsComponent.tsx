import { useState } from "react";
import "./AllWords.scss";
import Word from "components/Word/Word";

const AllWordsComponent = () => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  return (
    <div className="all-words">
      <p className="all-words__title">all your words</p>
      <div className="all-words__words">
        <p className="all-words__words__filter">не придумала еще</p>
        <div className="all-words__words__container">
          <Word front="meow" back="werer" />
          <Word front="meow123" back="wer" />
          <Word front="meowwewe" back="w2321r" />
          <Word front="meqweqw" back="we3r" />
          <Word front="me" back="were324r" />
          <Word front="meqweow" back="w3er" />
          <Word front="mqeeqww" back="wr" />
          <Word front="meow" back="werer" />
          <Word front="meow123" back="wer" />
          <Word front="meowwewe" back="w2321r" />
          <Word front="meqweqw" back="we3r" />
          <Word front="me" back="were324r" />
          <Word front="meqweow" back="w3er" />
          <Word front="mqeeqww" back="wr" /> <Word front="meow" back="werer" />
          <Word front="meow123" back="wer" />
          <Word front="meowwewe" back="w2321r" />
          <Word front="meqweqw" back="we3r" />
          <Word front="me" back="were324r" />
          <Word front="meqweow" back="w3er" />
          <Word front="mqeeqww" back="wr" />
        </div>
        <div className="all-words__buttons">
          {[...Array(5)].map((item, index) => (
            <p
              className={`all-words__buttons__item pointer ${
                selectedPage === index
                  ? "all-words__buttons__item__selected"
                  : ""
              }`}
              onClick={() => setSelectedPage(index)}
              key={index}
            >
              {index + 1}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllWordsComponent;
