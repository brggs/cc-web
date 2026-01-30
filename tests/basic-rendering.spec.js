import { test, expect } from '@playwright/test';

test.describe('Basic page rendering', () => {
    test('homepage renders with key content', async ({ page }) => {
        await page.goto('/');

        // Check page loaded successfully
        await expect(page).toHaveTitle(/Home/);

        // Verify key content is present
        await expect(page.getByText(/Exploring Technology for Curious Kids/i)).toBeVisible();
        await expect(page.locator('section').getByText(/Fun and engaging coding & tech videos/i)).toBeVisible();

        // Check social links are present (at least one)
        await expect(page.locator('a[href*="youtube.com"]').first()).toBeVisible();
    });

    test('about page renders', async ({ page }) => {
        await page.goto('/about');

        // Check page loaded successfully
        await expect(page).toHaveTitle(/About/i);
        await expect(page.getByRole('heading', { name: /About Curious Coders/i })).toBeVisible();
    });

    test('articles page renders', async ({ page }) => {
        await page.goto('/articles');

        // Check page loaded successfully
        await expect(page).toHaveTitle(/Articles/i);

        // Verify at least one article or heading is present
        await expect(page.locator('h1')).toBeVisible();
    });

    test('links page renders', async ({ page }) => {
        await page.goto('/links');

        // Check page loaded successfully
        await expect(page).toHaveTitle(/Links/i);

        // Verify key content is present
        await expect(page.getByText(/Latest Video/i)).toBeVisible();

        // Check social links are present (at least one icon)
        await expect(page.locator('.fa-instagram').first()).toBeVisible();
    });

    test('navigation works across pages', async ({ page }) => {
        await page.goto('/');

        // Find and click articles link
        const articlesLink = page.locator('#site-header').getByRole('link', { name: /articles/i });
        if (await articlesLink.isVisible()) {
            await articlesLink.click();
            // Should navigate to articles page
            await expect(page).toHaveURL(/\/articles/);
        }
    });
});
