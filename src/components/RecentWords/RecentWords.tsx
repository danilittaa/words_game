import { FC, useEffect, useState } from "react";
import "./RecentWords.scss";
import RecentWordsItem from "./RecentWordsItem";
import { axiosWithAuth } from "axiosConfig";

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
    fetchResentWords();
  }, []);

  console.log(recentWords);

  return (
    <div className="recent-words">
      <p className="recent-words__title">Recent Words</p>
      {recentWords.length ? (
        recentWords.map((item) => (
          <RecentWordsItem word={item.word} translation={item.translation} />
        ))
      ) : (
        <p className="recent-words__empty">No recent words yet</p>
      )}

      {!!recentWords.length && <p className="recent-words__more">See All...</p>}
    </div>
  );
};

export default RecentWords;
