import { getCollection } from 'astro:content';

/**
 * The activities that should appear on the site.
 *
 * Entries with `draft: true` in their frontmatter are left out of the built
 * site - both the listing and their own page - but are still rendered by
 * `npm run dev`, so a draft can be previewed while it's being written.
 */
export async function getPublishedActivities() {
  return await getCollection(
    'activities',
    ({ data }) => import.meta.env.DEV || !data.draft
  );
}
