import { loadPages } from '@/api/load-pages';
import Home from '@/templates/Home';
import { notFound } from 'next/navigation';
import config from '@/config';

export async function generateMetadata({ params }) {
  try {
    const data = await loadPages(config.defaultSlug);
    return {
      title: `${data[0].title} | ${config.siteName}`,
    };
  } catch (error) {
    return {
      title: `Page Not Found | ${config.siteName}`,
    };
  }
}

export async function generateStaticParams() {
  try {
    const pages = await loadPages();
    // Filter out the home page and empty slugs
    return pages
      .filter((page) => page.slug)
      .map((page) => ({
        slug: page.slug,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function Page({ params }) {
  try {
    console.log('slug dinamico:', params.slug);
    const data = await loadPages(params.slug);

    if (!data || !data.length) {
      notFound();
    }

    return <Home data={data} />;
  } catch (error) {
    console.error('Error loading page:', error);
    notFound();
  }
}
