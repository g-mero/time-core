import dayjs from "dayjs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  formatToDateTime,
  formatToDateTimeMS,
  formatToIso,
} from "~/format/format-local";

describe("formatUtc", () => {
  beforeEach(() => {
    vi.useFakeTimers().setSystemTime("2024-06-15T13:45:30.123Z");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("formats to local date time", () => {
    const testDate = Date.now();
    const dayjsInst = dayjs(testDate);
    const testCases: [string, string][] = [
      [formatToDateTime(testDate), dayjsInst.format("YYYY-MM-DD HH:mm:ss")],
      [
        formatToDateTimeMS(testDate),
        dayjsInst.format("YYYY-MM-DD HH:mm:ss.SSS"),
      ],
      [formatToIso(testDate), dayjsInst.format("YYYY-MM-DDTHH:mm:ss.SSSZ")],
    ];
    for (const [formatted, expected] of testCases) {
      expect(formatted).toBe(expected);
    }
  });
});
