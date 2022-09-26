import { formatCurrency } from "@/utils/formatCurrency";

describe("formatCurrency utils", () => {
  it("should return string", () => {
    const result = formatCurrency(49);
    expect(typeof result === "string").toBeTruthy();
  });

  it("should if number is 49 return string formatted currency", () => {
    const result = formatCurrency(49);
    expect(result).toBe("R$\xa049,00");
  });

  it("should if number is 50 return string formatted currency", () => {
    const result = formatCurrency(50);
    expect(result).toBe("R$\xa050,00");
  });
});
