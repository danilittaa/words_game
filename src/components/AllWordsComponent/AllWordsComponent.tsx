import { useEffect, useState } from "react";
import "./AllWords.scss";
import Word from "components/Word/Word";
import { axiosWithAuth } from "axiosConfig";

const AllWordsComponent = () => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  const [recentWords, setResentWords] = useState<RecentWord[]>([]);
  const fetchResentWords = async () => {
    const response = await axiosWithAuth.get("/recent-words/", {
      params: { page_size: 5, page: selectedPage + 1 }, //page_size - ???
    });
    const results = response.data as RecentWordPage;
    setPageNum(results.count / results.results.length);
    setResentWords(results.results);
  };
  useEffect(() => {
    fetchResentWords();
  }, []);
  return (
    <div className="all-words">
      <p className="all-words__title">all your words</p>
      <div className="all-words__words">
        <div className="all-words__words__container">
          {recentWords.length ? (
            recentWords.map((item) => (
              <Word front={item.word.text} back={item.translation.text} />
            ))
          ) : (
            <p className="all-words__words__container__empty">
              You have no words yet😢
            </p>
          )}
        </div>

        <div className="all-words__buttons">
          {[...Array(pageNum)].map((item, index) => (
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
