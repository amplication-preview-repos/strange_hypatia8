import { SortOrder } from "../../util/SortOrder";

export type GameSessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  clickCount?: SortOrder;
  sessionStart?: SortOrder;
  userId?: SortOrder;
};
