import { JsonValue } from "type-fest";
import { Click } from "../click/Click";
import { GameSession } from "../gameSession/GameSession";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  totalClicks: number | null;
  clicks?: Array<Click>;
  gameSessions?: Array<GameSession>;
};
