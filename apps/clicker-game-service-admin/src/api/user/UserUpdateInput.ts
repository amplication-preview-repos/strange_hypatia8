import { InputJsonValue } from "../../types";
import { ClickUpdateManyWithoutUsersInput } from "./ClickUpdateManyWithoutUsersInput";
import { GameSessionUpdateManyWithoutUsersInput } from "./GameSessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  totalClicks?: number | null;
  clicks?: ClickUpdateManyWithoutUsersInput;
  gameSessions?: GameSessionUpdateManyWithoutUsersInput;
};
