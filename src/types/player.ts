export type BestPlayerPage = {
  count: number;
  next: number;
  previous: number;
  results: BestPlayer[];
};

export type BestPlayer = {
  id: number;
  username: string;
  exp: number;
};
