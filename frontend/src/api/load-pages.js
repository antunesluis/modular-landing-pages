import { mapData } from './map-data';
import { pageService } from './services';

export const loadPages = async (slug = '') => {
  try {
    // Limpando o slug e removendo espaços em branco
    const cleanSlug = slug ? slug.trim().replace(/[^a-z0-9-_]/gi, '') : '';
    console.log('Processing slug:', cleanSlug);

    const data = await pageService.getPageBySlug(cleanSlug);

    console.log('Data:', data);

    if (!data || !data.data || !data.data.length) {
      console.log('No data found for slug:', cleanSlug);
      return [];
    }

    const mappedData = mapData(data.data);
    console.log('Mapped data:', mappedData.length, 'items');
    return mappedData;
  } catch (error) {
    console.error('Error in loadPages:', error);
    return [];
  }
};
