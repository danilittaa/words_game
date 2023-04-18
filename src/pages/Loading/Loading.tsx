import React, { useEffect, useState } from "react";
import "./Loading.scss";
import LoadingComponent from "components/LoadingComponent/LoadingComponent";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigate("/results"); //temporarily
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && (
        <>
          <LoadingComponent />
        </>
      )}
    </>
  );
};

export default Loading;
