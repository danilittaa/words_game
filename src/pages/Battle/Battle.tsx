import BattleComponent from "components/BattleComponent";
import LevelResult from "components/LevelResult";
import User from "components/User";
import { FC, useEffect, useState } from "react";
import LoadingComponent from "components/LoadingComponent";
import { axiosWithAuth } from "axiosConfig";
import { useAppSelector } from "hook";
import ResultsComponent from "components/ResultsComponent";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { WEBSOCKET_URL } from "../../constants";
import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";
import "./Battle.scss";

const Battle: FC = () => {
  const { user } = useAppSelector((store) => store.user);
  const navigator = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFirstQuestion, setIsFirstQuestion] = useState<boolean>(true);
  const [allTime, setAllTime] = useState<number>(0);
  const [myHealth, setMyHealth] = useState<number>(10);
  const [opponentHealth, setOpponentHealth] = useState<number>(10);

  const [duelMessage, setDuelMessage] = useState<Duel>();
  const [duelQuestionMessage, setDuelQuestionMessage] =
    useState<DuelQuestion>();
  const [duelOpponentChoice, setDuelOpponentChoice] =
    useState<DuelOpponentChoice>();
  const [duelQuestionResult, setDuelQuestionResult] =
    useState<DuelQuestionResult>();
  const [duelOutCome, setDuelOutcome] = useState<DuelOutcome>();

  const [playWin] = useSound(
    user.preferences.sound_effects ? "/sounds/win.wav" : ""
  );
  const [playLoose] = useSound(
    user.preferences.sound_effects ? "/sounds/loose.wav" : ""
  );

  useEffect(() => {
    const addToDuelQueue = async () => {
      try {
        const response = await axiosWithAuth.post("/duels/");
        if (response.status === 202) {
          const socket = new WebSocket(
            ` ${WEBSOCKET_URL}duels/updates/?access_token=${localStorage.getItem(
              "accessToken"
            )}`
          );
          socket.onmessage = (e) => {
            const message = JSON.parse(e.data);
            const property = Object.keys(message)[0];

            switch (property) {
              case "duel": {
                setDuelMessage(message.duel as Duel);
                break;
              }
              case "duel_question":
                setDuelQuestionMessage(message.duel_question as DuelQuestion);
                setDuelQuestionResult(undefined);
                setIsFirstQuestion(false);
                break;
              case "duel_opponent_choice":
                setDuelOpponentChoice(
                  message.duel_opponent_choice as DuelOpponentChoice
                );
                break;
              case "duel_question_result":
                const res = message.duel_question_result as DuelQuestionResult;
                setDuelQuestionResult(res);
                setMyHealth(res.status.me.hp);
                setOpponentHealth(res.status.opponent.hp);

                break;
              case "duel_outcome":
                let play: PlayFunction;
                if (message.duel_outcome.outcome === "victory") {
                  play = playWin;
                }
                if (message.duel_outcome.outcome === "defeat") {
                  play = playLoose;
                }
                setTimeout(() => {
                  setDuelOutcome(message.duel_outcome as DuelOutcome);
                  play();
                }, 2000);

                break;
              default:
                console.log("Error receiving the message from server");
                return;
            }
            setIsLoading(false);
          };
        }
      } catch (error) {
        console.error("Error receiving message from the server:", error);
        toast.error("Try later", {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigator("/");
        }, 5000);
      }
    };
    addToDuelQueue();
  }, []);

  useEffect(() => {
    const interval =
      !duelOutCome &&
      setInterval(() => {
        setAllTime((prevTime) => prevTime + 1);
      }, 1000);

    return () => {
      clearInterval(interval || 0);
    };
  }, [duelOutCome]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="battle-page">
          <User
            type="enemy"
            username={duelMessage?.opponent?.username || "Player"}
            health={opponentHealth}
          />
          <User type="you" username={user.username} health={myHealth} />
          <div className="battle__all-time">{formatTime(allTime)}</div>

          {duelOutCome ? (
            <ResultsComponent outcome={duelOutCome} />
          ) : duelQuestionResult ? (
            <LevelResult duelQuestionResult={duelQuestionResult} />
          ) : (
            <BattleComponent
              duelQuestionMessage={duelQuestionMessage}
              seconds={isFirstQuestion ? 10 : 7}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Battle;
