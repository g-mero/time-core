export type DateArgs =
  | Date
  | string
  | number
  | [number, number, number, number?, number?, number?, number?]
  | {
      args?: [number, number, number, number?, number?, number?, number?];
      tz?: "local" | "utc";
    };

/**
 * Parse various date arguments into a Date object
 * @param args date arguments.
 * @param clone default is true. whether to clone the Date object if a Date is passed
 * @example
 * ```ts
 * parseDate(); // current date
 * parseDate(new Date(2020, 0, 1)); // Date object
 *
 * parseDate([2025,6,1]); // 2025-06-01
 *
 * const date = new Date(2020, 0, 1);
 * parseDate(date) !== date; // true
 * parseDate(date, false) === date; // true
 *
 * parseDate("2020-01-01T00:00:00Z"); // ISO string
 */
export function parseDate(args?: DateArgs, clone = true): Date {
  if (args instanceof Date) {
    // clone date
    return clone ? new Date(args.getTime()) : args;
  }
  if (Array.isArray(args)) {
    const [year, month, day, hours = 0, min = 0, sec = 0, ms = 0] = args;
    return new Date(year, month - 1, day, hours, min, sec, ms);
  }
  if (typeof args === "object" && "args" in args) {
    const opts = args;
    if (opts.tz === "utc" && Array.isArray(opts.args)) {
      return new Date(Date.UTC(...opts.args));
    }
    return parseDate(opts.args);
  }

  return new Date(args as string | number);
}
