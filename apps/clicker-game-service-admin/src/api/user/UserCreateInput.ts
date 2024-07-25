import { InputJsonValue } from "../../types";
import { ClickCreateNestedManyWithoutUsersInput } from "./ClickCreateNestedManyWithoutUsersInput";
import { GameSessionCreateNestedManyWithoutUsersInput } from "./GameSessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  totalClicks?: number | null;
  clicks?: ClickCreateNestedManyWithoutUsersInput;
  gameSessions?: GameSessionCreateNestedManyWithoutUsersInput;
};
