import React from "react";
import "./RecentWords.scss";
import RecentWordsItem from "./RecentWordsItem";

const RecentWords = () => {
  return (
    <div className="recent-words">
      <p className="recent-words__title">Recent Words</p>
      <RecentWordsItem />
      <RecentWordsItem />
      <RecentWordsItem />
      <RecentWordsItem />
      <p className="recent-words__more">See All...</p>
    </div>
  );
};

export default RecentWords;
