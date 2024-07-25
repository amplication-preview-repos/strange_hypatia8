import { GameSessionWhereUniqueInput } from "./GameSessionWhereUniqueInput";
import { GameSessionUpdateInput } from "./GameSessionUpdateInput";

export type UpdateGameSessionArgs = {
  where: GameSessionWhereUniqueInput;
  data: GameSessionUpdateInput;
};
