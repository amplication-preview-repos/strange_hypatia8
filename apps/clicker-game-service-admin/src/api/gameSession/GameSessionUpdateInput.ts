import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GameSessionUpdateInput = {
  clickCount?: number | null;
  sessionStart?: Date | null;
  user?: UserWhereUniqueInput | null;
};
