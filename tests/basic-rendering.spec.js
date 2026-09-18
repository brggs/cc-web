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

    test('activities page renders, newest first', async ({ page }) => {
        await page.goto('/activities');

        // Check page loaded successfully
        await expect(page).toHaveTitle(/Activities/i);

        // The most recently published activity is listed at the top
        const firstActivity = page.locator('#page-content section').first();
        await expect(firstActivity.getByRole('heading')).toHaveText(/Mythical Hero's Maze/i);
        await expect(firstActivity.locator('img')).toBeVisible();
        await expect(firstActivity.getByRole('link', { name: /read more/i })).toBeVisible();
    });

    test('activity page renders and links to its work sheets', async ({ page }) => {
        await page.goto('/activities/makecode-arcade-code-a-maze');

        // Check page loaded successfully
        await expect(page).toHaveTitle(/Mythical Hero's Maze/i);
        await expect(page.getByRole('heading', { name: /Running the session/i })).toBeVisible();

        // The work sheets are linked from the activity
        await expect(page.getByRole('link', { name: /work sheets/i })).toHaveAttribute(
            'href', '/activities/makecode-arcade-code-a-maze/worksheet'
        );
    });

    test('escape room activity page renders with its video and build guide links', async ({ page }) => {
        await page.goto('/activities/microbit-escape-room');

        // Check page loaded successfully
        await expect(page).toHaveTitle(/Fix the Space Ship/i);
        await expect(page.getByRole('heading', { name: /How it works/i })).toBeVisible();

        // The walkthrough video is embedded
        await expect(page.locator('iframe[src*="youtube.com/embed/0pUaQZcnjMQ"]')).toBeVisible();

        // The build details live in the GitHub repository
        await expect(
            page.locator('a[href^="https://github.com/brggs/Fix-The-SpaceShip-Escape-Room"]').first()
        ).toBeVisible();

        // Photos of the build are shown
        expect(await page.locator('#page-content img').count()).toBeGreaterThanOrEqual(4);
    });

    test('draft activities are left out of the built site', async ({ page }) => {
        await page.goto('/activities');

        // The draft isn't advertised on the listing...
        await expect(page.getByText(/Curious Chicken Shop/i)).toHaveCount(0);

        // ...and its page isn't built either.
        const response = await page.goto('/activities/social-engineering-chicken-shop');
        expect(response?.status()).toBe(404);
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
