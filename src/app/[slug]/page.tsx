import { loadPages } from '@/api/load-pages';
import Home from '@/templates/Home';
import { notFound } from 'next/navigation';
import config from '@/config';

type DynamicPageParams = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: DynamicPageParams) {
  const slug = (await params).slug;

  try {
    const data = await loadPages(slug);
    return {
      title: `${data[0]?.title || 'Page Not Found'} | ${config.siteName}`,
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
    // Filtrando páginas válidas e removendo a página inicial
    return pages
      .filter((page) => page.slug && page.slug !== config.defaultSlug)
      .map((page) => ({
        slug: page.slug,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function Page({ params }: DynamicPageParams) {
  const slug = (await params).slug;

  if (!slug) {
    notFound();
  }

  try {
    console.log('Loading page for slug:', slug);
    const data = await loadPages(slug);

    if (!data?.length) {
      notFound();
    }

    return <Home data={data} />;
  } catch (error) {
    console.error('Error loading page:', error);
    notFound();
  }
}
