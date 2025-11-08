import { callGetMethodOnDate } from "~/common/utils";
import { type DateArgs, parseDate } from "~/parse";

/**
 * get date values from Date object
 *
 * @returns [year, oneBasedMonth, day, weekday, hours, minutes, seconds, milliseconds, tzOffsetMinutes]
 *
 * Note: month is 1-based (1-12)
 */
export function getAllDateFields(
  args: DateArgs,
  utc = false
): [number, number, number, number, number, number, number, number, number] {
  return [
    ...getDates(args, utc),
    getWeekday(args, utc),
    ...getTimes(args, utc),
    utc ? 0 : getTimezoneOffsetMinutes(args),
  ];
}
/** alias of getAllDateFields(args, true)
 */
export function getAllUtcDateFields(
  args: DateArgs
): [number, number, number, number, number, number, number, number, number] {
  return getAllDateFields(args, true);
}

/**
 * @param utc default false
 * @returns [year, month, day]
 */
export function getDates(
  args: DateArgs,
  utc = false
): [number, number, number] {
  return [getYear(args, utc), getMonth(args, utc), getDay(args, utc)];
}
/** alias of getDate(args, true)
 */
export function getUtcDates(args: DateArgs) {
  return getDates(args, true);
}

/**
 * @param utc default false
 * @returns [hours, minutes, seconds, milliseconds]
 */
export function getTimes(
  args: DateArgs,
  utc = false
): [number, number, number, number] {
  return [
    getHours(args, utc),
    getMinutes(args, utc),
    getSeconds(args, utc),
    getMilliseconds(args, utc),
  ];
}
/** alias of getTime(args, true)
 */
export function getUtcTime(args: DateArgs) {
  return getTimes(args, true);
}

export function getYear(args: DateArgs, utc = false) {
  const date = parseDate(args, false);
  return callGetMethodOnDate(date, "FullYear", utc);
}
/** alias of getYear(args, true)
 */
export function getUtcYear(args: DateArgs) {
  return getYear(args, true);
}
/**
 * Get month (1-12)
 */
export function getMonth(args: DateArgs, utc = false) {
  const date = parseDate(args, false);
  return callGetMethodOnDate(date, "Month", utc) + 1;
}
/** alias of getMonth(args, true)
 */
export function getUtcMonth(args: DateArgs) {
  return getMonth(args, true);
}

export function getDay(args: DateArgs, utc = false) {
  const date = parseDate(args, false);
  return callGetMethodOnDate(date, "Date", utc);
}
/** alias of getDay(args, true)
 */
export function getUtcDay(args: DateArgs) {
  return getDay(args, true);
}
/**
 * Get weekday (0-6)
 *
 * 0 - Sunday, 1 - Monday, ..., 6 - Saturday
 */
export function getWeekday(args: DateArgs, utc = false) {
  const date = parseDate(args, false);
  return callGetMethodOnDate(date, "Day", utc);
}
/** alias of getWeekday(args, true)
 */
export function getUtcWeekday(args: DateArgs) {
  return getWeekday(args, true);
}
export function getHours(args: DateArgs, utc = false) {
  const date = parseDate(args, false);
  return callGetMethodOnDate(date, "Hours", utc);
}
/** alias of getHours(args, true)
 */
export function getUtcHours(args: DateArgs) {
  return getHours(args, true);
}
export function getMinutes(args: DateArgs, utc = false) {
  const date = parseDate(args, false);
  return callGetMethodOnDate(date, "Minutes", utc);
}
/** alias of getMinutes(args, true)
 */
export function getUtcMinutes(args: DateArgs) {
  return getMinutes(args, true);
}
export function getSeconds(args: DateArgs, utc = false) {
  const date = parseDate(args, false);
  return callGetMethodOnDate(date, "Seconds", utc);
}
/** alias of getSeconds(args, true)
 */
export function getUtcSeconds(args: DateArgs) {
  return getSeconds(args, true);
}
export function getMilliseconds(args: DateArgs, utc = false) {
  const date = parseDate(args, false);
  return callGetMethodOnDate(date, "Milliseconds", utc);
}
/** alias of getMilliseconds(args, true)
 */
export function getUtcMilliseconds(args: DateArgs) {
  return getMilliseconds(args, true);
}

/**
 * @returns -1 * Date.getTimezoneOffset()
 */
export function getTimezoneOffsetMinutes(args: DateArgs) {
  const date = parseDate(args, false);
  return -date.getTimezoneOffset();
}

export function getTimestamp(args: DateArgs) {
  return parseDate(args).getTime();
}
