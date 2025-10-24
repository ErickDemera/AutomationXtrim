import { Page, expect } from '@playwright/test';

export class ContactPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enviarFormularioContacto() {
    const { page } = this;
    await page.getByText('×').click().catch(() => {}); // cerrar modal si existe
   await page.getByRole('link', { name: 'k Te llamamos' }).click();
   await page.getByRole('textbox', { name: 'Nombres' }).click();
   await page.getByRole('textbox', { name: 'Nombres' }).fill('Erick Demera');
   
   await page.getByRole('textbox', { name: 'Cédula' }).click();
   await page.getByRole('textbox', { name: 'Cédula' }).fill('0915236458');
   await page.getByRole('textbox', { name: 'Teléfono' }).click();
   await page.getByRole('textbox', { name: 'Teléfono' }).fill('0236591263');
   await page.getByRole('textbox', { name: 'Correo electrónico' }).click();
   await page.getByRole('textbox', { name: 'Correo electrónico' }).fill('prueba@gmail.com');
   await page.getByRole('checkbox', { name: 'Al dar clic, autorizas el uso' }).check();
   await page.getByRole('button', { name: 'Enviar' }).click();
  }
}
