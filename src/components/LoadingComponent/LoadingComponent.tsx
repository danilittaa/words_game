import { FC, useEffect, useState } from "react";
import "./LoadingComponent.scss";
import { axiosWithAuth } from "axiosConfig";
import { useNavigate } from "react-router-dom";

const LoadingComponent = () => {
  const [time, setTime] = useState<number>(1);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setTime((prev) => (prev === 15 ? 1 : prev + 1));
    }, 30);
  }, [time]);

  return (
    <div className="loading">
      <div className="loading__shapes">
        {[...Array(16)].map((_, index) => (
          <div
            className={`loading__shape shape_${index + 1} ${
              index === time || index === time - 1 || index === time + 1
                ? "selected-style"
                : ""
            }`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingComponent;
