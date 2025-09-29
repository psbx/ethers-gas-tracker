import { formatUnits } from "ethers";

type NumericInput = bigint | number | string;

function toBigInt(value: NumericInput): bigint {
  if (typeof value === "bigint") {
    return value;
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error("numeric value must be finite");
    }
    return BigInt(Math.trunc(value));
  }
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Error("numeric string cannot be empty");
  }
  return BigInt(trimmed);
}

export function formatGwei(value: NumericInput): string {
  return `${formatUnits(value, "gwei")} gwei`;
}

export function estimateTransferCost(gasPriceWei: NumericInput, gasLimit: NumericInput): bigint {
  const price = toBigInt(gasPriceWei);
  const limit = toBigInt(gasLimit);
  return price * limit;
}
