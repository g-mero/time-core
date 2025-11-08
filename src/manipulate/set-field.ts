import { type DateArgs, parseDate } from "~/parse";

export function setYear(args: DateArgs, year: number) {
  const date = parseDate(args);
  date.setFullYear(year);
  return date;
}

export function setMonth(args: DateArgs, month: number) {
  const date = parseDate(args);
  date.setMonth(month);
  return date;
}

export function setDate(args: DateArgs, day: number) {
  const date = parseDate(args);
  date.setDate(day);
  return date;
}

export function setWeekday(args: DateArgs, weekday: number) {
  const date = parseDate(args);
  const currentWeekday = date.getDay();
  const diff = weekday - currentWeekday;
  date.setDate(date.getDate() + diff);
  return date;
}

export function setHours(
  args: DateArgs,
  hours: number,
  min?: number,
  sec?: number,
  ms?: number
) {
  const date = parseDate(args);
  date.setHours(hours, min, sec, ms);
  return date;
}

export function setMinutes(
  args: DateArgs,
  min: number,
  sec?: number,
  ms?: number
) {
  const date = parseDate(args);
  date.setMinutes(min, sec, ms);
  return date;
}

export function setSeconds(args: DateArgs, sec: number, ms?: number) {
  const date = parseDate(args);
  date.setSeconds(sec, ms);
  return date;
}

export function setMilliseconds(args: DateArgs, ms: number) {
  const date = parseDate(args);
  date.setMilliseconds(ms);
  return date;
}
