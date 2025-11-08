import { INVALID_DATE_STR } from "~/common/constant";
import { getTzOffsetString, isDateArgsValid, pad } from "~/common/utils";
import { getAllDateFields } from "~/getter/get-field";
import { type DateArgs, parseDate } from "~/parse";

export function formatToUtcDateTime(args: DateArgs) {
  if (!isDateArgsValid(args)) {
    return INVALID_DATE_STR;
  }
  return parseDate(args).toISOString().slice(0, 19).replace("T", " ");
}

export function formatToUtcDateTimeMS(args: DateArgs) {
  if (!isDateArgsValid(args)) {
    return INVALID_DATE_STR;
  }
  return parseDate(args).toISOString().slice(0, 23).replace("T", " ");
}

export function formatToIsoZulu(args: DateArgs) {
  if (!isDateArgsValid(args)) {
    return INVALID_DATE_STR;
  }
  return parseDate(args).toISOString();
}

export function formatToUtcIso(args: DateArgs) {
  if (!isDateArgsValid(args)) {
    return INVALID_DATE_STR;
  }
  const [year, month, day, _, hours, minutes, seconds, milliseconds, tzOffset] =
    getAllDateFields(args, true);
  return (
    `${year}-${pad(month)}-${pad(day)}T${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}` +
    `${getTzOffsetString(tzOffset)}`
  );
}
