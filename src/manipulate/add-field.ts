import {
  MS_IN_DAY,
  MS_IN_HOUR,
  MS_IN_MINUTE,
  MS_IN_SECOND,
  MS_IN_WEEK,
} from "~/common/constant";
import { type DateArgs, parseDate } from "~/parse";

export function addYears(args: DateArgs, years: number) {
  const date = parseDate(args);
  date.setFullYear(date.getFullYear() + years);
  return date;
}

export function addMonths(args: DateArgs, months: number) {
  const date = parseDate(args);
  date.setMonth(date.getMonth() + months);
  return date;
}

export function addWeeks(args: DateArgs, weeks: number) {
  const date = parseDate(args);
  const timestamp = date.getTime() + weeks * MS_IN_WEEK;
  date.setTime(timestamp);
  return date;
}

export function addDays(args: DateArgs, days: number) {
  const date = parseDate(args);
  const timestamp = date.getTime() + days * MS_IN_DAY;
  date.setTime(timestamp);
  return date;
}

export function addHours(args: DateArgs, hours: number) {
  const date = parseDate(args);
  const timestamp = date.getTime() + hours * MS_IN_HOUR;
  date.setTime(timestamp);
  return date;
}

export function addMinutes(args: DateArgs, minutes: number) {
  const date = parseDate(args);
  const timestamp = date.getTime() + minutes * MS_IN_MINUTE;
  date.setTime(timestamp);
  return date;
}

export function addSeconds(args: DateArgs, seconds: number) {
  const date = parseDate(args);
  const timestamp = date.getTime() + seconds * MS_IN_SECOND;
  date.setTime(timestamp);
  return date;
}

export function addMilliseconds(args: DateArgs, milliseconds: number) {
  const date = parseDate(args);
  const timestamp = date.getTime() + milliseconds;
  date.setTime(timestamp);
  return date;
}
