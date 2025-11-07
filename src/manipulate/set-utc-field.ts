import { type DateArgs, parseDate } from "~/parse";

export function setUtcYear(args: DateArgs, year: number) {
  const date = parseDate(args);
  date.setUTCFullYear(year);
  return date;
}

export function setUtcMonth(args: DateArgs, month: number) {
  const date = parseDate(args);
  date.setUTCMonth(month);
  return date;
}

export function setUtcDate(args: DateArgs, day: number) {
  const date = parseDate(args);
  date.setUTCDate(day);
  return date;
}

export function setUtcWeekday(args: DateArgs, weekday: number) {
  const date = parseDate(args);
  const currentWeekday = date.getUTCDay();
  const diff = weekday - currentWeekday;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

export function setUtcHours(args: DateArgs, hours: number) {
  const date = parseDate(args);
  date.setUTCHours(hours);
  return date;
}

export function setUtcMinutes(args: DateArgs, minutes: number) {
  const date = parseDate(args);
  date.setUTCMinutes(minutes);
  return date;
}

export function setUtcSeconds(args: DateArgs, seconds: number) {
  const date = parseDate(args);
  date.setUTCSeconds(seconds);
  return date;
}

export function setUtcMilliseconds(args: DateArgs, milliseconds: number) {
  const date = parseDate(args);
  date.setUTCMilliseconds(milliseconds);
  return date;
}
