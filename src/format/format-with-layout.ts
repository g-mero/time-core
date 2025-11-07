import { INVALID_DATA_STR } from "~/common/constant";
import { getTzOffsetString, isDateValid, pad } from "~/common/utils";
import { type DateArgs, getDateValues, parseDate } from "~/parse";

function escapeForRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function formatWithLayout(args: DateArgs, layout: string, utc = false) {
  const date = parseDate(args);
  if (!isDateValid(date)) {
    return INVALID_DATA_STR;
  }

  const [
    year,
    month,
    day,
    weekday,
    hours24,
    minutes,
    seconds,
    milliseconds,
    timezoneOffset,
  ] = getDateValues(date, utc);

  const hours12 = hours24 % 12 || 12;
  const isAM = hours24 < 12;

  const replacements: Record<string, string> = {
    YY: pad(year % 100),
    YYYY: year.toString(),
    M: month.toString(),
    MM: pad(month),
    D: day.toString(),
    DD: pad(day),
    d: weekday.toString(), // 0=Sunday
    H: hours24.toString(),
    HH: pad(hours24),
    h: hours12.toString(),
    hh: pad(hours12),
    m: minutes.toString(),
    mm: pad(minutes),
    s: seconds.toString(),
    ss: pad(seconds),
    SSS: pad(milliseconds, 3),
    Z: getTzOffsetString(timezoneOffset, ":"),
    ZZ: getTzOffsetString(timezoneOffset, ""),
    A: isAM ? "AM" : "PM",
    a: isAM ? "am" : "pm",
  };

  const tokenKeys = Object.keys(replacements)
    .sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length; // longer first
      }
      // if same length, stable order: prefer lexicographically larger first to mimic your compare
      return b.localeCompare(a);
    })
    .map(escapeForRegex);

  const tokenRegex = new RegExp(tokenKeys.join("|"), "g");

  return layout.replace(tokenRegex, (match) => replacements[match]);
}
