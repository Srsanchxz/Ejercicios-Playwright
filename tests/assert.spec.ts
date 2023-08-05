import { test, expect } from "@playwright/test";

test("playing with assertions", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/textinput");

  // Verificamos que el input esté visible
  await expect(page.locator("#newButtonName")).toBeVisible();

  // selecionar y llenar el input
  await page.locator("#newButtonName").fill("Hola");

  // Haciendo click en el boton
  await page.locator("#updatingButton").click();

  // Verificando si el texto del boton se actualice
  await expect(page.locator("#updatingButton")).toContainText("Hola");
});
