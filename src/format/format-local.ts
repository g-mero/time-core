import { INVALID_DATA_STR } from "~/common/constant";
import { getTzOffsetString, isDateValid, pad } from "~/common/utils";
import { type DateArgs, getDateValues, parseDate } from "~/parse";

export function formatToDateTime(args?: DateArgs) {
  const date = parseDate(args);
  if (!isDateValid(date)) {
    return INVALID_DATA_STR;
  }
  const [year, month, day, _, hours, minutes, seconds] = getDateValues(
    date,
    false
  );
  return `${year}-${pad(month)}-${pad(day)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export function formatToDateTimeMS(args?: DateArgs) {
  const date = parseDate(args);
  if (!isDateValid(date)) {
    return INVALID_DATA_STR;
  }
  const [year, month, day, _, hours, minutes, seconds, milliseconds] =
    getDateValues(date, false);
  return `${year}-${pad(month)}-${pad(day)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

export function formatToIso(args?: DateArgs) {
  const date = parseDate(args);
  if (!isDateValid(date)) {
    return INVALID_DATA_STR;
  }
  const [year, month, day, _, hours, minutes, seconds, milliseconds, tzOffset] =
    getDateValues(date, false);
  return (
    `${year}-${pad(month)}-${pad(day)}T${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}` +
    `${getTzOffsetString(tzOffset)}`
  );
}
