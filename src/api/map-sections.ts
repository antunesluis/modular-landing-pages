import { GridContentProps } from '@/components/GridContent';
import { GridImageProps, GridItemImageProps } from '@/components/GridImage';
import { GridTextProps, GridItemText } from '@/components/GridText';
import { GridTwoColumnsProps } from '@/components/GridTwoColumns';
import { SectionProps } from '@/templates/Home';

export const mapSections = (sections = [] as any): SectionProps[] => {
  return sections.map((section: any): SectionProps => {
    const { __component: component } = section;

    if (component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (
  section = {} as any,
): GridTwoColumnsProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image = {},
    metadata: { background = false, section_id: sectionId = '' } = '',
  } = section;

  return {
    component,
    title,
    text,
    srcImg: image?.url || '',
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    Content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {} as any): GridTextProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text: any): GridItemText => {
      const { title = '', description = '' } = text;
      return {
        title: title || '',
        description: description || '',
      };
    }),
  };
};

export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid
      .map((item: any): GridItemImageProps[] => {
        const images = item.image || [];
        return images.map((image: any): GridItemImageProps => {
          const { formats, alternativeText: altText } = image;

          return {
            altText: altText || '',
            large: formats?.large?.url || '',
            medium: formats?.medium?.url || '',
            small: formats?.small?.url || '',
            thumbnail: formats?.thumbnail?.url || '',
          };
        });
      })
      .flat(),
  };
};
