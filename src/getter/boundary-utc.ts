import { type DateArgs, parseDate } from "~/parse";


export function startOfUtcYear(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
export function endOfUtcYear(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCMonth(11, 31);
  date.setUTCHours(23, 59, 59, 999);
  return date;
}

export function startOfUtcMonth(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
export function endOfUtcMonth(args: DateArgs) {
  const date = parseDate(args);
  const month = date.getUTCMonth();
  date.setUTCMonth(month + 1, 0);
  date.setUTCHours(23, 59, 59, 999);
  return date;
}

export function startOfUtcDay(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
export function endOfUtcDay(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCHours(23, 59, 59, 999);
  return date;
}

export function startOfUtcHour(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCMinutes(0, 0, 0);
  return date;
}
export function endOfUtcHour(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCMinutes(59, 59, 999);
  return date;
}

export function startOfUtcMinute(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCSeconds(0, 0);
  return date;
}
export function endOfUtcMinute(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCSeconds(59, 999);
  return date;
}

export function startOfUtcSecond(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCMilliseconds(0);
  return date;
}
export function endOfUtcSecond(args: DateArgs) {
  const date = parseDate(args);
  date.setUTCMilliseconds(999);
  return date;
}
