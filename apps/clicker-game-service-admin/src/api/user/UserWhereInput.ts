import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ClickListRelationFilter } from "../click/ClickListRelationFilter";
import { GameSessionListRelationFilter } from "../gameSession/GameSessionListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  totalClicks?: IntNullableFilter;
  clicks?: ClickListRelationFilter;
  gameSessions?: GameSessionListRelationFilter;
};
