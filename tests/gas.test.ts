import { describe, expect, it } from "vitest";

import { estimateTransferCost, formatGwei } from "../src/gas";

describe("formatGwei", () => {
  it("formats values in gwei", () => {
    expect(formatGwei(1_000_000_000n)).toBe("1.0 gwei");
  });
});

describe("estimateTransferCost", () => {
  it("multiplies gas price and limit", () => {
    const cost = estimateTransferCost(20_000_000_000n, 21_000n);
    expect(cost).toBe(420_000_000_000_000n);
  });

  it("accepts decimal input", () => {
    const cost = estimateTransferCost("20000000000", "21000");
    expect(cost).toBe(420_000_000_000_000n);
  });
});
