import { loadPages } from '@/api/load-pages';
import Home from '@/templates/Home';
import { notFound } from 'next/navigation';
import config from '@/config';

export async function generateMetadata() {
  try {
    const data = await loadPages();
    return {
      title: `${data[0].title} | ${config.siteName}`,
    };
  } catch (error) {
    return {
      title: `Home | ${config.siteName}`,
    };
  }
}

export default async function Page() {
  try {
    console.log('defaultSlug:', config.defaultSlug);
    const data = await loadPages(config.defaultSlug);

    if (!data || !data.length) {
      notFound();
    }

    return <Home data={data} />;
  } catch (error) {
    console.error('Error loading home page:', error);
    notFound();
  }
}
