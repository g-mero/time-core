import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  formatToIsoZulu,
  formatToUtcDateTime,
  formatToUtcDateTimeMS,
  formatToUtcIso,
} from "~/format/format-utc";

describe("formatUtc", () => {
  beforeEach(() => {
    vi.useFakeTimers().setSystemTime("2024-06-15T13:45:30.123Z");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("formats to UTC date time", () => {
    const testDate = Date.now();
    const testCases: [string, string][] = [
      [formatToIsoZulu(testDate), "2024-06-15T13:45:30.123Z"],
      [formatToUtcDateTime(testDate), "2024-06-15 13:45:30"],
      [formatToUtcIso(testDate), "2024-06-15T13:45:30.123+00:00"],
      [formatToUtcDateTimeMS(testDate), "2024-06-15 13:45:30.123"],
    ];
    for (const [formatted, expected] of testCases) {
      expect(formatted).toBe(expected);
    }
  });
});
