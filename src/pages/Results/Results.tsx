import React, { FC, useEffect, useState } from "react";
import "./Results.scss";
import ResultsComponent from "components/ResultsComponent/ResultsComponent";
import { useNavigate } from "react-router-dom";

interface ResultsProps {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}
const Results: FC<ResultsProps> = ({ setIsStarted }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigate("/battle"); //temporarily
    }, 4000);
  }, []);

  return (
    <div>{isLoading && <ResultsComponent setIsStarted={setIsStarted} />}</div>
  );
};

export default Results;
