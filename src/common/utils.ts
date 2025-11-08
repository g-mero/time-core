import { type DateArgs, parseDate } from "~/parse";

export function pad(n: number, width = 2) {
  return n.toString().padStart(width, "0");
}

export function getTzOffsetString(offsetMinutes: number, separator = ":") {
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const absOffset = Math.abs(offsetMinutes);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  return `${sign}${pad(hours)}${separator}${pad(minutes)}`;
}

export function isDateArgsValid(args?: DateArgs) {
  const date = parseDate(args);
  return !Number.isNaN(date.getTime());
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function callGetMethodOnDate(
  date: Date,
  method: string,
  utc: boolean
): number {
  // @ts-expect-error dynamic method name
  return date[`get${utc ? "UTC" : ""}${method}`]();
}

export function now() {
  return Date.now();
}
