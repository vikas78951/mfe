import { expect, test } from "@playwright/test";

test("Shell shows fallback when Accounts remote is unavailable", async ({
  page,
}) => {
  await page.route("http://localhost:3001/remoteEntry.js", async (route) => {
    await route.abort("failed");
  });

  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Accounts is unavailable",
    }),
  ).toBeVisible();

  await expect(page.getByText("Please try again later.")).toBeVisible();
});
