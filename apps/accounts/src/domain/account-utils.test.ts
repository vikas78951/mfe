import { describe, expect, it } from "vitest";
import { accounts } from "./account";
import { filterAccounts } from "./account-utils";

describe("filterAccounts", () => {
  it("returns all accounts when search is empty", () => {
    expect(filterAccounts(accounts, "")).toEqual(accounts);
  });

  it("filters accounts by name", () => {
    const result = filterAccounts(accounts, "vikas");

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Vikas Singh");
  });

  it("filters accounts by email", () => {
    const result = filterAccounts(accounts, "john@example.com");

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("John Doe");
  });
});