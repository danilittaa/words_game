import { FC, useEffect, useState } from "react";
import RecentWordsItem from "./RecentWordsItem";
import { axiosWithAuth } from "axiosConfig";
import { Link } from "react-router-dom";
import "./RecentWords.scss";

const RecentWords: FC = () => {
  const [recentWords, setResentWords] = useState<RecentWord[]>([]);

  const fetchResentWords = async () => {
    const response = await axiosWithAuth.get("/recent-words/", {
      params: { page_size: 4 },
    });
    const { results } = response.data as RecentWordPage;
    setResentWords(results);
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      fetchResentWords();
    }
  }, []);

  return (
    <div className="recent-words">
      <p className="recent-words__title">Recent Words</p>
      {recentWords.length ? (
        recentWords.map((item, index) => (
          <RecentWordsItem
            word={item.word}
            translation={item.translation}
            key={index}
          />
        ))
      ) : (
        <p className="recent-words__empty">No recent words yet</p>
      )}

      {!!recentWords.length && (
        <Link to="/book" className="recent-words__more">
          See All...
        </Link>
      )}
    </div>
  );
};

export default RecentWords;
