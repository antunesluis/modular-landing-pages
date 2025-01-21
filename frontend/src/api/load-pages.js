import { mapData } from './map-data';
import { pageService } from './services';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? slug.replace(/[^a-z0-9-_]/gi, '') : '';
  console.log('cleanSlug:', cleanSlug);

  try {
    const data = await pageService.getPageBySlug(cleanSlug);

    if (!data || !data.data) {
      throw new Error('No data returned from API');
    }

    return mapData(data.data);
  } catch (error) {
    console.error('Error in loadPages:', error);
    return [];
  }
};
