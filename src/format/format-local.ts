import { INVALID_DATE_STR } from "~/common/constant";
import { getTzOffsetString, isDateArgsValid, pad } from "~/common/utils";
import { getAllDateFields } from "~/getter";
import type { DateArgs } from "~/parse";

export function formatToDateTime(args: DateArgs) {
  if (!isDateArgsValid(args)) {
    return INVALID_DATE_STR;
  }
  const [year, month, day, _, hours, minutes, seconds] = getAllDateFields(
    args,
    false
  );
  return `${year}-${pad(month)}-${pad(day)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export function formatToDateTimeMS(args: DateArgs) {
  if (!isDateArgsValid(args)) {
    return INVALID_DATE_STR;
  }
  const [year, month, day, _, hours, minutes, seconds, milliseconds] =
    getAllDateFields(args, false);
  return `${year}-${pad(month)}-${pad(day)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

export function formatToIso(args: DateArgs) {
  if (!isDateArgsValid(args)) {
    return INVALID_DATE_STR;
  }
  const [year, month, day, _, hours, minutes, seconds, milliseconds, tzOffset] =
    getAllDateFields(args, false);
  return (
    `${year}-${pad(month)}-${pad(day)}T${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}` +
    `${getTzOffsetString(tzOffset)}`
  );
}
