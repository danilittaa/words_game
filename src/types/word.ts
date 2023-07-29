type RecentWordPage = {
  count: number;
  next: number;
  previous: number;
  results: RecentWord[];
};

type RecentWord = {
  word: Word;
  translation: Translation;
};

type Word = {
  id: number;
  text: string;
  part_of_speech: string;
  level: string;
};

type Translation = {
  id: number;
  text: string;
  meaning: string;
};
