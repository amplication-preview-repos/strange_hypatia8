import { Click as TClick } from "../api/click/Click";

export const CLICK_TITLE_FIELD = "id";

export const ClickTitle = (record: TClick): string => {
  return record.id?.toString() || String(record.id);
};
