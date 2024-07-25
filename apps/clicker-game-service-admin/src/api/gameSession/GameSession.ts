import { User } from "../user/User";

export type GameSession = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clickCount: number | null;
  sessionStart: Date | null;
  user?: User | null;
};
