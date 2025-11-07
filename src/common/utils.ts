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

export function isDateValid(date: Date) {
  return !Number.isNaN(date.getTime());
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
