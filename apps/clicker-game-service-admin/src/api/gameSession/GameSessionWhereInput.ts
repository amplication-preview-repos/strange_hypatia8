import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GameSessionWhereInput = {
  id?: StringFilter;
  clickCount?: IntNullableFilter;
  sessionStart?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
