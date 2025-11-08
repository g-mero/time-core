import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  endOfDay,
  endOfHour,
  endOfMinute,
  endOfMonth,
  endOfSecond,
  endOfUtcDay,
  endOfUtcHour,
  endOfUtcMinute,
  endOfUtcMonth,
  endOfUtcSecond,
  endOfUtcYear,
  endOfYear,
  startOfDay,
  startOfHour,
  startOfMinute,
  startOfMonth,
  startOfSecond,
  startOfUtcDay,
  startOfUtcHour,
  startOfUtcMinute,
  startOfUtcMonth,
  startOfUtcSecond,
  startOfUtcYear,
  startOfYear,
} from "~/getter";

describe("get boundary", () => {
  beforeEach(() => {
    vi.useFakeTimers().setSystemTime("2024-06-15T13:45:30.123Z");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("local boundary", () => {
    const testDate = new Date("2024-06-15 13:45:30.123");

    expect(startOfYear(testDate)).toEqual(new Date("2024-01-01 00:00:00.000"));
    expect(endOfYear(testDate)).toEqual(new Date("2024-12-31 23:59:59.999"));
    expect(startOfMonth(testDate)).toEqual(new Date("2024-06-01 00:00:00.000"));
    expect(endOfMonth(testDate)).toEqual(new Date("2024-06-30 23:59:59.999"));
    expect(startOfDay(testDate)).toEqual(new Date("2024-06-15 00:00:00.000"));
    expect(endOfDay(testDate)).toEqual(new Date("2024-06-15 23:59:59.999"));
    expect(startOfHour(testDate)).toEqual(new Date("2024-06-15 13:00:00.000"));
    expect(endOfHour(testDate)).toEqual(new Date("2024-06-15 13:59:59.999"));
    expect(startOfMinute(testDate)).toEqual(
      new Date("2024-06-15 13:45:00.000")
    );
    expect(endOfMinute(testDate)).toEqual(new Date("2024-06-15 13:45:59.999"));
    expect(startOfSecond(testDate)).toEqual(
      new Date("2024-06-15 13:45:30.000")
    );
    expect(endOfSecond(testDate)).toEqual(new Date("2024-06-15 13:45:30.999"));
  });

  it("utc boundary", () => {
    const testDate = new Date("2024-06-15T13:45:30.123Z");

    expect(startOfUtcYear(testDate)).toEqual(
      new Date("2024-01-01T00:00:00.000Z")
    );
    expect(endOfUtcYear(testDate)).toEqual(
      new Date("2024-12-31T23:59:59.999Z")
    );
    expect(startOfUtcMonth(testDate)).toEqual(
      new Date("2024-06-01T00:00:00.000Z")
    );
    expect(endOfUtcMonth(testDate)).toEqual(
      new Date("2024-06-30T23:59:59.999Z")
    );
    expect(startOfUtcDay(testDate)).toEqual(
      new Date("2024-06-15T00:00:00.000Z")
    );
    expect(endOfUtcDay(testDate)).toEqual(new Date("2024-06-15T23:59:59.999Z"));
    expect(startOfUtcHour(testDate)).toEqual(
      new Date("2024-06-15T13:00:00.000Z")
    );
    expect(endOfUtcHour(testDate)).toEqual(
      new Date("2024-06-15T13:59:59.999Z")
    );
    expect(startOfUtcMinute(testDate)).toEqual(
      new Date("2024-06-15T13:45:00.000Z")
    );
    expect(endOfUtcMinute(testDate)).toEqual(
      new Date("2024-06-15T13:45:59.999Z")
    );
    expect(startOfUtcSecond(testDate)).toEqual(
      new Date("2024-06-15T13:45:30.000Z")
    );
    expect(endOfUtcSecond(testDate)).toEqual(
      new Date("2024-06-15T13:45:30.999Z")
    );
  });
});
