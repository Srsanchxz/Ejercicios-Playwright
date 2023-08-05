import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  //automatizando inicio de sesion plataforma UEES
  await page.goto("https://wsclass.uees.edu.sv/age/Default.aspx");
  await page.getByPlaceholder("Ingrese su CIF").click();
  await page.getByPlaceholder("Ingrese su CIF").fill("2020010390");
  await page.getByPlaceholder("Ingrese su CIF").press("Tab");
  await page.getByPlaceholder("Contraseña").press("CapsLock");
  await page.getByPlaceholder("Contraseña").fill("S");
  await page.getByPlaceholder("Contraseña").press("CapsLock");
  await page.getByPlaceholder("Contraseña").fill("Sanbenito");
  await page.getByRole("button", { name: "Ingresar" }).click();
});
