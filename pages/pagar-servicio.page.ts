import { Page, expect } from '@playwright/test';

export class PagarServicioPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validarPagoServicio() {
    const { page } = this;

    await page.getByText('×').click();
    await page.getByRole('link', { name: ' Pagar Servicio' }).click();
    await page.locator('x-present-modal').getByRole('button', { name: 'Continuar' }).click();
    await page.getByRole('textbox', { name: 'Ingrese su número de Cédula' }).click();
    await page.getByRole('textbox', { name: 'Ingrese su número de Cédula' }).fill('0951626993');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByRole('img', { name: 'cerrar' }).click();
    await page.getByText('Ir a la página de Xtrim').click();
  
  }
}
