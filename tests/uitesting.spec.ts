import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("about:blank");

  await page.goto("http://uitestingplayground.com/");
  // forma antigua de escribirlo await page.getByText('Aristotle').click();
  await page.getByText("Aristotle").click();

  await page.getByRole("link", { name: "Resources" }).click();

  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Click" }).click();
  await page
    .getByRole("button", { name: "Button That Ignores DOM Click Event" })
    .click();

  await expect(page.getByRole("heading", { name: "Added!" })).toBeHidden();
});
