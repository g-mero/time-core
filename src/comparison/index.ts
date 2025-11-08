import { now } from "~/common/utils";
import { getDates } from "~/getter";
import { addDays } from "~/manipulate";
import { type DateArgs, parseDate } from "~/parse";

/**
 * @returns if the two dates are on the same calendar date
 *
 * @example
 * ```ts
 * isSameDate("2020-08-05T12:00:00Z", "2020-08-05"); // true
 * isSameDate("2020-08-05T12:00:00Z", "2020-08-06"); // false
 * ```
 */
export function isSameDate(date1: DateArgs, date2: DateArgs) {
  const [year1, month1, day1] = getDates(date1);
  const [year2, month2, day2] = getDates(date2);

  return year1 === year2 && month1 === month2 && day1 === day2;
}

export function isToday(args: DateArgs) {
  const date = parseDate(args);

  return isSameDate(date, now());
}

export function isTomorrow(args: DateArgs) {
  const date = parseDate(args);
  const tomorrow = addDays(now(), 1);

  return isSameDate(date, tomorrow);
}

export function isYesterday(args: DateArgs) {
  const date = parseDate(args);
  const yesterday = addDays(now(), -1);

  return isSameDate(date, yesterday);
}
