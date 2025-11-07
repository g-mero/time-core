import { INVALID_DATA_STR } from "~/common/constant";
import { getTzOffsetString, isDateValid, pad } from "~/common/utils";
import { type DateArgs, getDateValues, parseDate } from "~/parse";

export function formatToUtcDateTime(args?: DateArgs) {
  const date = parseDate(args);
  if (!isDateValid(date)) {
    return INVALID_DATA_STR;
  }
  return date.toISOString().slice(0, 19).replace("T", " ");
}

export function formatToUtcDateTimeMS(args?: DateArgs) {
  const date = parseDate(args);
  if (!isDateValid(date)) {
    return INVALID_DATA_STR;
  }
  return date.toISOString().slice(0, 23).replace("T", " ");
}

export function formatToIsoZulu(args?: DateArgs) {
  const date = parseDate(args);
  if (!isDateValid(date)) {
    return INVALID_DATA_STR;
  }
  return date.toISOString();
}

export function formatToUtcIso(args?: DateArgs) {
  const date = parseDate(args);
  if (!isDateValid(date)) {
    return INVALID_DATA_STR;
  }
  const [year, month, day, _, hours, minutes, seconds, milliseconds, tzOffset] =
    getDateValues(date, true);
  return (
    `${year}-${pad(month)}-${pad(day)}T${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}` +
    `${getTzOffsetString(tzOffset)}`
  );
}
