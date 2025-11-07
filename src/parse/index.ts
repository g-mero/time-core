export type DateArgs =
  | Date
  | string
  | number
  | [number, number, number, number?, number?, number?, number?]
  | {
      args?: [number, number, number, number?, number?, number?, number?];
      tz?: "local" | "utc";
    };

export function parseDate(args?: DateArgs): Date {
  if (!args) {
    return new Date();
  }
  if (args instanceof Date) {
    // clone date
    return new Date(args.getTime());
  }
  if (typeof args === "string" || typeof args === "number") {
    return new Date(args);
  }
  if (Array.isArray(args)) {
    return new Date(...args);
  }
  if (typeof args === "object" && "args" in args) {
    const opts = args;
    if (opts.tz === "utc" && Array.isArray(opts.args)) {
      return new Date(Date.UTC(...opts.args));
    }
    return parseDate(opts.args);
  }
  return new Date();
}

function callGetMethod(date: Date, method: string, utc: boolean) {
  // @ts-expect-error dynamic method name
  return date[`get${utc ? "UTC" : ""}${method}`]();
}

/**
 * get date values from Date object
 *
 * [year, month, day, weekday, hours, minutes, seconds, milliseconds, tzOffsetMinutes]
 *
 * Note: month is 0-based as in JavaScript Date
 */
export function getDateValues(
  date: Date,
  utc: boolean
): [number, number, number, number, number, number, number, number, number] {
  return [
    callGetMethod(date, "FullYear", utc),
    callGetMethod(date, "Month", utc) + 1,
    callGetMethod(date, "Date", utc),
    callGetMethod(date, "Day", utc),
    callGetMethod(date, "Hours", utc),
    callGetMethod(date, "Minutes", utc),
    callGetMethod(date, "Seconds", utc),
    callGetMethod(date, "Milliseconds", utc),
    utc ? 0 : -date.getTimezoneOffset(),
  ];
}
