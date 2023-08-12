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

export type DuelQuestion = {
  id: number;
  number: number;
  text: string;
  level: string;
  choices: DuelQuestionChoice[];
  answers: DuelQuestionAnswerPair;
};

export type DuelQuestionChoice = {
  id: number;
  text: string;
  meaning: string;
};

export type DuelQuestionAnswer = {
  id: number;
  choice: DuelQuestionChoice;
  correct: boolean;
};

export type DuelQuestionResult = {
  question_id: number;
  answers: DuelQuestionAnswerPair;
  correct_choice: DuelQuestionChoice;
  status: DuelPlayerStatusPair;
};

export type DuelQuestionAnswerPair = {
  me: DuelQuestionAnswer;
  opponent: DuelQuestionAnswer;
};

export type DuelPlayerStatusPair = {
  me: DuelPlayersStatus;
  opponent: DuelPlayersStatus;
};

export type DuelPlayersStatus = {
  hp: number;
};

export type DuelOutcome = {
  outcome: "victory" | "defeat" | "draw";
  exp_gained: number;
  total_exp: number;
  questions_number: number;
  correct_answers: number;
};

export type UpdatedData =
  | Duel
  | DuelQuestion
  | DuelOpponentChoice
  | DuelQuestionResult
  | DuelOutcome;

export type DuelMessage = {
  duel: Duel;
  duel_question: DuelQuestion;
  duel_opponent_choice: DuelOpponentChoice;
  duel_quiestion_result: DuelQuestionResult;
  duel_outcome: DuelOutcome;
};
