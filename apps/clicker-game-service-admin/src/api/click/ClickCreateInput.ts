import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClickCreateInput = {
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
