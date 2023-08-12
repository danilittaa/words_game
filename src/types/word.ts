export type RecentWordPage = {
  count: number;
  next: number;
  previous: number;
  results: RecentWord[];
};

export type RecentWord = {
  word: Word;
  translation: Translation;
};

export type Word = {
  id: number;
  text: string;
  part_of_speech: string;
  level: string;
};

export type Translation = {
  id: number;
  text: string;
  meaning: string;
};
