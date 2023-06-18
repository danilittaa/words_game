import { FC } from "react";

interface PlayersItemProps {
  username: string;
  exp: number;
}
const PlayersItem: FC<PlayersItemProps> = ({ username, exp }) => {
  return (
    <div className="players__item">
      <p className="players__item__username">{username}</p>
      <p>{exp}</p>
    </div>
  );
};

export default PlayersItem;
