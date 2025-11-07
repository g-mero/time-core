import { describe, expect, it } from "vitest";
import {
  addDays,
  addHours,
  addMilliseconds,
  addMinutes,
  addMonths,
  addSeconds,
  addYears,
} from "~/manipulate";

describe("add-field", () => {
  it("should add a field to date", () => {
    const testDate = "2024-06-15T11:23:34.345Z";
    expect(addYears(testDate, 2).toISOString()).toBe(
      "2026-06-15T11:23:34.345Z"
    );
    expect(addMonths(testDate, 3).toISOString()).toBe(
      "2024-09-15T11:23:34.345Z"
    );
    expect(addDays(testDate, 10).toISOString()).toBe(
      "2024-06-25T11:23:34.345Z"
    );
    expect(addHours(testDate, 5).toISOString()).toBe(
      "2024-06-15T16:23:34.345Z"
    );
    expect(addMinutes(testDate, 30).toISOString()).toBe(
      "2024-06-15T11:53:34.345Z"
    );
    expect(addSeconds(testDate, 45).toISOString()).toBe(
      "2024-06-15T11:24:19.345Z"
    );
    expect(addMilliseconds(testDate, 500).toISOString()).toBe(
      "2024-06-15T11:23:34.845Z"
    );
  });
});
