import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Accounts", () => {
  it("filters accounts when the user searches", async () => {
    const user = userEvent.setup();

    render(<App />);

    const searchInput = screen.getByRole("searchbox", {
      name: "Search accounts",
    });

    await user.type(searchInput, "vikas");

    expect(screen.getByText("Vikas Singh")).toBeInTheDocument();
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  });
});
