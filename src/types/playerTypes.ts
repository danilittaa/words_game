type BestPlayerPage = {
  count: number;
  next: number;
  previous: number;
  results: BestPlayer[];
};

type BestPlayer = {
  id: number;
  username: string;
  exp: number;
};
