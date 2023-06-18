import { FC, useEffect, useState } from "react";
import "./Results.scss";
import ResultsComponent from "components/ResultsComponent/ResultsComponent";
import { useNavigate } from "react-router-dom";

const Results: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     navigate("/battle"); //temporarily
  //   }, 4000);
  // }, []);

  return <div>{isLoading && <ResultsComponent />}</div>;
};

export default Results;
