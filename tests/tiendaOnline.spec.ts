import { test, expect } from "@playwright/test";

const BASE_URL = "https://automationexercise.com/";

test("playing with assertions", async ({ page }) => {
  // ir a la URL
  await page.goto("https://automationexercise.com/");
  // Asegurarnos de hacer seccionar el primer articulo, bajamos con el scroll
  await page.mouse.wheel(0, 500);
  // ingresar a la page de 'ver mas'
  await page.locator(".choose > .nav > li > a").first().click();
  // incrementando el boton de cantidad
  await page.locator("#quantity").click();
  await page.locator("#quantity").click();
  // anadiendo al carrito
  await page.getByRole("button", { name: " Add to cart" }).click();
  //asegurarnos que el modal sea correcto
  await expect(page.locator(".modal-content .modal-title")).toHaveText(
    "Added!"
  );
  //asegurandonos que el modal haya sido cerrado
  const modal = page.locator("#cartModal");
  await page.click("button[data-dismiss='modal']");
  await expect(modal).toHaveClass(/fade/);
});
