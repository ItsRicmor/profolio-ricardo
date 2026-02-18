import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useScrollAnimation } from "./use-scroll-animation";

describe("useScrollAnimation", () => {
  let observeMock: any;
  let unobserveMock: any;
  let disconnectMock: any;

  beforeEach(() => {
    observeMock = vi.fn();
    unobserveMock = vi.fn();
    disconnectMock = vi.fn();

    global.IntersectionObserver = vi.fn().mockImplementation((callback) => ({
      observe: observeMock,
      unobserve: unobserveMock,
      disconnect: disconnectMock,
    }));
  });

  it("should initialize with isVisible false", () => {
    const { result } = renderHook(() => useScrollAnimation());
    expect(result.current.isVisible).toBe(false);
    expect(result.current.ref.current).toBeNull();
  });

  it("should call IntersectionObserver with correct threshold", () => {
    renderHook(() => useScrollAnimation(0.5));
    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.5 }
    );
  });

  it("should use default threshold of 0.15", () => {
    renderHook(() => useScrollAnimation());
    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.15 }
    );
  });
});
