import { type DateArgs, parseDate } from "~/parse";

export function startOfYear(args: DateArgs) {
  const date = parseDate(args);
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function endOfYear(args: DateArgs) {
  const date = parseDate(args);
  date.setMonth(11, 31);
  date.setHours(23, 59, 59, 999);
  return date;
}

export function startOfMonth(args: DateArgs) {
  const date = parseDate(args);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function endOfMonth(args: DateArgs) {
  const date = parseDate(args);
  const month = date.getMonth();
  date.setMonth(month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

export function startOfDay(args: DateArgs) {
  const date = parseDate(args);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function endOfDay(args: DateArgs) {
  const date = parseDate(args);
  date.setHours(23, 59, 59, 999);
  return date;
}

export function startOfHour(args: DateArgs) {
  const date = parseDate(args);
  date.setMinutes(0, 0, 0);
  return date;
}

export function endOfHour(args: DateArgs) {
  const date = parseDate(args);
  date.setMinutes(59, 59, 999);
  return date;
}

export function startOfMinute(args: DateArgs) {
  const date = parseDate(args);
  date.setSeconds(0, 0);
  return date;
}

export function endOfMinute(args: DateArgs) {
  const date = parseDate(args);
  date.setSeconds(59, 999);
  return date;
}

export function startOfSecond(args: DateArgs) {
  const date = parseDate(args);
  date.setMilliseconds(0);
  return date;
}

export function endOfSecond(args: DateArgs) {
  const date = parseDate(args);
  date.setMilliseconds(999);
  return date;
}
