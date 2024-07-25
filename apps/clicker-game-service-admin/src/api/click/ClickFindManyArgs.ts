import { ClickWhereInput } from "./ClickWhereInput";
import { ClickOrderByInput } from "./ClickOrderByInput";

export type ClickFindManyArgs = {
  where?: ClickWhereInput;
  orderBy?: Array<ClickOrderByInput>;
  skip?: number;
  take?: number;
};
