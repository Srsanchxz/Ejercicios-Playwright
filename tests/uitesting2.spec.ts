import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");

  await page.locator("#title");
});
