import { test, expect } from '@playwright/test';

const WORKSHEET = '/activities/makecode-arcade-code-a-maze/worksheet';

test.describe('Work sheet printing', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(WORKSHEET);
    });

    test('renders the challenges on screen', async ({ page }) => {
        await expect(page).toHaveTitle(/Work Sheet/i);

        const challenges = page.locator('.printable h2');
        await expect(challenges.first()).toBeVisible();

        // Every top level heading is a challenge - anything else would get a
        // sheet of its own when printed.
        for (const text of await challenges.allTextContents()) {
            expect(text.trim()).toMatch(/^Challenge \d/);
        }
    });

    test('each challenge starts a new sheet, except the first', async ({ page }) => {
        await page.emulateMedia({ media: 'print' });

        const breaks = await page
            .locator('.printable h2')
            .evaluateAll((els) => els.map((el) => getComputedStyle(el).breakBefore));

        expect(breaks.length).toBeGreaterThan(1);
        // The first must not break, or the print out opens with a blank sheet.
        expect(breaks[0]).toBe('auto');
        expect(breaks.slice(1)).toEqual(breaks.slice(1).map(() => 'page'));
    });

    test('the leader notes are left off the print out', async ({ page }) => {
        const leaderNotes = page.getByText(/For whoever is running the session/i);
        await expect(leaderNotes).toBeVisible();

        await page.emulateMedia({ media: 'print' });

        await expect(leaderNotes).toBeHidden();
        // ...and the first thing printed is a challenge.
        await expect(page.locator('.printable h2').first()).toBeVisible();
    });

    test('the site furniture is left off the print out', async ({ page }) => {
        const printButton = page.locator('#print-button');
        await expect(printButton).toBeVisible();

        await page.emulateMedia({ media: 'print' });

        await expect(printButton).toBeHidden();
        await expect(page.locator('#site-header')).toBeHidden();
        await expect(page.locator('footer')).toBeHidden();
        // The "back to the activity" link can't be clicked on paper.
        await expect(page.getByRole('link', { name: /Back to the/i })).toBeHidden();
    });

    test('inline code is not wrapped in literal backticks', async ({ page }) => {
        const code = page.locator('.printable code').first();
        await expect(code).toBeVisible();

        const rendered = await code.evaluate((el) => {
            const before = getComputedStyle(el, '::before').content;
            const after = getComputedStyle(el, '::after').content;
            return [before, after].join(' ');
        });
        expect(rendered).not.toContain('`');
    });
});
