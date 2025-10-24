import { Page } from '@playwright/test';

export async function cerrarModalSiExiste(page: Page) {
  const modal = page.getByText('×');
  if (await modal.isVisible().catch(() => false)) {
    await modal.click();
  }
}
