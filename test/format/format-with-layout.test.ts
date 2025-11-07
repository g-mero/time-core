import dayjs from "dayjs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { formatWithLayout } from "~/format/format-with-layout";

describe("formatWithLayout", () => {
  beforeEach(() => {
    vi.useFakeTimers().setSystemTime("2024-06-15T13:45:30.123Z");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("formats date with local time", () => {
    const testDate = Date.now();
    const testCases: string[] = [
      "YYYY-MM-DD HH:mm:ss",
      "MM/DD/YY h:mm A",
      "DD-MM-YYYY HH:mm:ss.SSS Z",
      "h:mm:ss a ZZ",
    ];
    for (const layout of testCases) {
      expect(formatWithLayout(testDate, layout)).toBe(
        dayjs(testDate).format(layout)
      );
    }
  });

  it("formats date with utc", () => {
    const testDate = Date.now();
    const testCases: [string, string][] = [
      ["YYYY-MM-DD HH:mm:ss", "2024-06-15 13:45:30"],
      ["MM/DD/YY h:mm A", "06/15/24 1:45 PM"],
      ["DD-MM-YYYY HH:mm:ss.SSS Z", "15-06-2024 13:45:30.123 +00:00"],
      ["h:mm:ss a ZZ", "1:45:30 pm +0000"],
    ];

    for (const [layout, expected] of testCases) {
      const formatted = formatWithLayout(testDate, layout, true);
      expect(formatted).toBe(expected);
    }
  });
});
