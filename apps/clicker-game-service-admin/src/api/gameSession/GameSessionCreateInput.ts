import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GameSessionCreateInput = {
  clickCount?: number | null;
  sessionStart?: Date | null;
  user?: UserWhereUniqueInput | null;
};
