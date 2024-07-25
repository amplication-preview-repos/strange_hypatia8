import { User } from "../user/User";

export type Click = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  user?: User | null;
};
