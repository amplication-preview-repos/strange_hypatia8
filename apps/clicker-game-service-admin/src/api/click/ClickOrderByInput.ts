import { SortOrder } from "../../util/SortOrder";

export type ClickOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  userId?: SortOrder;
};
