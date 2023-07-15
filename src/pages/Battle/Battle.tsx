import BattleComponent from "components/BattleComponent/BattleComponent";
import LevelResult from "components/LevelResult/LevelResult";
import User from "components/User/User";
import { useEffect, useState } from "react";
import "./Battle.scss";
import LoadingComponent from "components/LoadingComponent/LoadingComponent";
import { axiosWithAuth } from "axiosConfig";
import { useAppSelector } from "hook";
import ResultsComponent from "components/ResultsComponent/ResultsComponent";

const Battle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myHealth, setMyHealth] = useState<number>(100);
  const [opponentHealth, setOpponentHealth] = useState<number>(100);

  const [duelMessage, setDuelMessage] = useState<Duel>();
  const [duelQuestionMessage, setDuelQuestionMessage] =
    useState<DuelQuestion>();
  const [duelOpponentChoice, setDuelOpponentChoice] =
    useState<DuelOpponentChoice>();
  const [duelQuestionResult, setDuelQuestionResult] =
    useState<DuelQuestionResult>();
  const [duelOutCome, setDuelOutcome] = useState<DuelOutcome>();
  const { user } = useAppSelector((store) => store.user);

  useEffect(() => {
    const addToDuelQueue = async () => {
      try {
        const response = await axiosWithAuth.post("/duels/");
        if (response.status === 202) {
          const socket = new WebSocket(
            `ws://localhost:10000/duels/updates/?access_token=${localStorage.getItem(
              "accessToken"
            )}`
          );
          socket.onmessage = (e) => {
            const message = JSON.parse(e.data);
            const property = Object.keys(message)[0];
            console.log("key", property);
            console.log(message);

            switch (property) {
              case "duel": {
                setDuelMessage(message.duel as Duel);
                break;
              }
              case "duel_question":
                setDuelQuestionMessage(message.duel_question as DuelQuestion);
                setDuelQuestionResult(undefined);
                break;
              case "duel_opponent_choice":
                setDuelOpponentChoice(
                  message.duel_opponent_choice as DuelOpponentChoice
                );
                break;
              case "duel_question_result":
                const res = message.duel_question_result as DuelQuestionResult;
                setDuelQuestionResult(res);
                if (!res.answers.me.correct) {
                  setMyHealth((prev) => prev - 20);
                }
                if (!res.answers.opponent.correct)
                  setOpponentHealth((prev) => prev - 20);
                break;
              case "duel_outcome":
                setDuelOutcome(message.duel_outcome as DuelOutcome);
                break;
              default:
                console.log("Error receiving the message from server");
                return;
            }
            setIsLoading(false);
          };
        }
      } catch (error) {
        console.error("Error adding user to duel queue:", error);
      }
    };

    addToDuelQueue();
  }, []);
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
          <div className="battle__all-time">2:01</div>

          {duelOutCome ? (
            <ResultsComponent outcome={duelOutCome} />
          ) : duelQuestionResult ? (
            <LevelResult duelQuestionResult={duelQuestionResult} />
          ) : (
            <BattleComponent duelQuestionMessage={duelQuestionMessage} />
          )}
        </div>
      )}
    </>
  );
};

export default Battle;
