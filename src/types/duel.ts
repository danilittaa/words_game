export type Duel = {
  id: number;
  started: number;
  opponent: DuelOpponent;
  questions: DuelQuestion[];
};

export type DuelOpponent = {
  id: number;
  username: string;
  exp: number;
};

export type DuelOpponentChoice = {
  date: number;
};

type DuelQuestion = {
  id: number;
  number: number;
  text: string;
  level: string;
  choices: DuelQuestionChoice[];
  answers: DuelQuestionAnswerPair;
};

type DuelQuestionChoice = {
  id: number;
  text: string;
  meaning: string;
};

type DuelQuestionAnswer = {
  id: number;
  choice: DuelQuestionChoice;
  correct: boolean;
};

type DuelQuestionResult = {
  question_id: number;
  answers: DuelQuestionAnswerPair;
  correct_choice: DuelQuestionChoice;
  status: DuelPlayerStatusPair;
};

type DuelQuestionAnswerPair = {
  me: DuelQuestionAnswer;
  opponent: DuelQuestionAnswer;
};

type DuelPlayerStatusPair = {
  me: DuelPlayersStatus;
  opponent: DuelPlayersStatus;
};

type DuelPlayersStatus = {
  hp: number;
};

type DuelOutcome = {
  outcome: "victory" | "defeat" | "draw";
  exp_gained: number;
  total_exp: number;
  questions_number: number;
  correct_answers: number;
};

type UpdatedData =
  | Duel
  | DuelQuestion
  | DuelOpponentChoice
  | DuelQuestionResult
  | DuelOutcome;

type DuelMessage = {
  duel: Duel;
  duel_question: DuelQuestion;
  duel_opponent_choice: DuelOpponentChoice;
  duel_quiestion_result: DuelQuestionResult;
  duel_outcome: DuelOutcome;
};
