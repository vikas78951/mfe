import { expect, test } from "@playwright/test";

test("Shell loads Accounts MFE and user can search accounts", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Accounts" })).toBeVisible();
  const searchInput = page.getByRole("searchbox", {
    name: "Search accounts",
  });
  await expect(searchInput).toBeVisible();
  await searchInput.fill("vikas");
  await expect(page.getByText("Vikas Singh")).toBeVisible();
  await expect(page.getByText("John Doe")).not.toBeVisible();
});
