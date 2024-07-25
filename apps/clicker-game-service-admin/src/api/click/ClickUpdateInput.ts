import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClickUpdateInput = {
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
