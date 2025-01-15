import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

describe('map-sections.js', () => {
  it('should render predefined data if no data is provided', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns if data is empty', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns witch data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'generic title',
      description: 'generic description',
      image: {
        url: 'a.svg',
      },
      metadata: {
        section_id: 'home',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('generic description');
    expect(data.title).toBe('generic title');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'generic title',
      Content: 'generic content',
      metadata: {
        section_id: 'intro',
        background: false,
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('generic title');
    expect(data.html).toBe('generic content');
  });

  it('should map grid text without data', () => {
    const data = mapTextGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'generic title',
      description: 'generic content',
      text_grid: [
        {
          title: 'generic title 1',
          description: 'generic description 1',
        },
        {
          title: 'generic title 2',
          description: 'generic description 2',
        },
      ],
      metadata: {
        section_id: 'services',
        background: true,
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('services');
    expect(data.title).toBe('generic title');
    expect(data.description).toBe('generic content');
    expect(data.grid[0].title).toBe('generic title 1');
    expect(data.grid[0].description).toBe('generic description 1');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);

    expect(data.background).toBe(false);
  });

  it('should map image grid with all formats', () => {
    const data = mapImageGrid({
      title: 'Project Gallery',
      description: 'Project images',
      image_grid: [
        {
          image: [
            {
              alternativeText: 'Image 1',
              formats: {
                url: 'original-image1.jpg',
                large: {
                  url: 'large-image1.jpg',
                },
                medium: {
                  url: 'medium-image1.jpg',
                },
                small: {
                  url: 'small-image1.jpg',
                },
                thumbnail: {
                  url: 'thumb-image1.jpg',
                },
              },
            },
          ],
        },
      ],
      metadata: {
        section_id: 'gallery',
        background: true,
      },
    });

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Project Gallery');
    expect(data.description).toBe('Project images');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('gallery');

    const firstImage = data.grid[0];

    expect(firstImage.altText).toBe('Image 1');
    expect(firstImage.formats.large).toBe('large-image1.jpg');
    expect(firstImage.formats.medium).toBe('medium-image1.jpg');
    expect(firstImage.formats.small).toBe('small-image1.jpg');
    expect(firstImage.formats.thumbnail).toBe('thumb-image1.jpg');
  });
});
