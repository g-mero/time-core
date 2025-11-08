import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { isSameDate, isToday, isTomorrow, isYesterday } from "~/comparison";

describe("comparison", () => {
  beforeEach(() => {
    // make sure tz not affect result
    vi.useFakeTimers().setSystemTime("2024-06-15 13:45:30.123");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("isSameDate", () => {
    expect(isSameDate("2024-06-15", Date.now())).toBe(true);
    expect(isSameDate("2024-06-15", "2024-06-14")).toBe(false);
  });

  it("isToday", () => {
    expect(isToday("2024-06-15")).toBe(true);
    expect(isToday([2024, 6, 15])).toBe(true);

    expect(isToday(Date.now())).toBe(true);
    expect(isToday(0)).toBe(false);
    expect(isToday("")).toBe(false);

    expect(isToday("2024-06-14")).toBe(false);
    expect(isToday("2024-06-16")).toBe(false);
  });

  it("isTomorrow", () => {
    expect(isTomorrow("2024-06-16")).toBe(true);
    expect(isTomorrow("2024-06-17")).toBe(false);
  });

  it("isYesterday", () => {
    expect(isYesterday("2024-06-14")).toBe(true);
    expect(isYesterday("2024-06-15")).toBe(false);
  });
});
