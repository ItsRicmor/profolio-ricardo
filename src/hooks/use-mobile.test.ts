import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useIsMobile } from "./use-mobile";

describe("useIsMobile", () => {
  let matchMediaMock: any;

  beforeEach(() => {
    matchMediaMock = vi.fn();
    window.matchMedia = matchMediaMock;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return false for desktop viewport", () => {
    matchMediaMock.mockImplementation((query: string) => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("should return true for mobile viewport", () => {
    matchMediaMock.mockImplementation((query: string) => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });
});
