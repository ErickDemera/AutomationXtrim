import { test } from '@playwright/test';
import { ContactPage } from '../pages/contact.page';
import { PagarServicioPage } from '../pages/pagar-servicio.page';
import { ZappingPage } from '../pages/zapping.page';

test.describe('Automatización sitio Xtrim', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.xtrim.com.ec/', { waitUntil: 'load' });
    await page.waitForLoadState('networkidle');
  });

  test('Validar formulario de contacto', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.enviarFormularioContacto();
  });

  test('Validar acceso a Pagar Servicio', async ({ page }) => {
    const pagarPage = new PagarServicioPage(page);
    await pagarPage.validarPagoServicio();
  });

  test('Validar acceso a Zapping - Plan Plus', async ({ page }) => {
    const zappingPage = new ZappingPage(page);
    await zappingPage.validarZappingPlanPlus();
  });

});
