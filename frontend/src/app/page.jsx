// app/page.jsx
import { pageService } from '@/api/services';
import { mapData } from '@/api/map-data';
import Home from '@/templates/Home'; // Mudando para import default
import config from '@/config';

export async function generateMetadata({ params }) {
  try {
    const data = await pageService.getPageBySlug(config.defaultSlug);
    const pageData = mapData(data.data);
    return {
      title: `${pageData[0].title} | ${config.siteName}`,
    };
  } catch (error) {
    return {
      title: `Error | ${config.siteName}`,
    };
  }
}

async function Page() {
  try {
    const data = await pageService.getPageBySlug(config.defaultSlug);
    const pageData = mapData(data.data);

    return <Home data={pageData} />;
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Erro ao carregar a página</div>;
  }
}

export default Page;
