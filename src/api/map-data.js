import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = []) => {
  // Se não houver dados, retorna estrutura padrão
  if (!Array.isArray(pagesData) || pagesData.length === 0) {
    return [
      {
        footerHtml: '',
        slug: '',
        title: '',
        sections: [],
        menu: {},
      },
    ];
  }

  return pagesData.map((data = {}) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml: String(footerHtml),
      slug: String(slug).toLowerCase(),
      title: String(title).trim(),
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
