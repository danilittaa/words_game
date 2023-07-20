import { useEffect, useState } from "react";
import "./AllWords.scss";
import Word from "components/Word/Word";
import { axiosWithAuth } from "axiosConfig";
import { toast } from "react-toastify";

const AllWordsComponent = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const [recentWords, setResentWords] = useState<RecentWord[]>([]);
  const fetchRecentWords = async () => {
    try {
      const response = await axiosWithAuth.get("/recent-words/", {
        params: { page_size: 50, page: pageNum },
      });
      const results = response.data as RecentWordPage;
      setResentWords(results.results);
      setPageNum((prev) => prev + 1);
    } catch (error) {
      console.log(error);
      toast.error("There is no more words", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    fetchRecentWords();
  }, []);
  return (
    <div className="all-words">
      <p className="all-words__title">all your words</p>
      <div className="all-words__words">
        {recentWords.length ? (
          <div className="all-words__words__container">
            {recentWords.map((item, index) => (
              <Word
                front={item.word.text}
                back={item.translation.text}
                key={index}
              />
            ))}
            <div
              className="all-words__words__container__more pointer"
              onClick={fetchRecentWords}
            >
              Load More
            </div>
          </div>
        ) : (
          <div className="all-words__words__container all-words__words__container__no_words">
            <p className="all-words__words__container__empty">
              You have no words yet😢
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllWordsComponent;
