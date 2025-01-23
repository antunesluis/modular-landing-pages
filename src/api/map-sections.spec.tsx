import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

describe('map-sections', () => {
  describe('mapSections', () => {
    it('should render predefined data if no data is provided', () => {
      const data = mapSections();
      expect(data).toEqual([]);
    });

    it('should test section with invalid data', () => {
      const withNoTextOrImageGrid = mapSections([
        {
          __component: 'section.section-grid',
        },
      ]);

      const WithNoComponent = mapSections([{}]);
      expect(withNoTextOrImageGrid).toEqual([
        { __component: 'section.section-grid' },
      ]);
      expect(WithNoComponent).toEqual([{}]);
    });

    it('should test section.section-grid with no text_grid or image_grid', () => {
      const withNoTextOrImageGrid = mapSections([
        {
          __component: 'section.section-grid',
          image_grid: [{}],
        },
        {
          __component: 'section.section-grid',
          text_grid: [{}],
        },
      ]);
      expect(withNoTextOrImageGrid.length).toBe(2);
    });

    it('should map multiple section types correctly', () => {
      const data = mapSections([
        {
          __component: 'section.section-two-columns',
          title: 'Two Columns',
          description: 'Description',
          image: { url: 'image.jpg' },
        },
        {
          __component: 'section.section-content',
          title: 'Content',
          Content: 'HTML content',
        },
        {
          __component: 'section.section-grid',
          text_grid: [{ title: 'Grid Text', description: 'Description' }],
        },
      ]);

      expect(data.length).toBe(3);
      expect(data[0].component).toBe('section.section-two-columns');
      expect(data[1].component).toBe('section.section-content');
      expect(data[2].component).toBe('section.section-grid-text');
    });
  });

  describe('mapSectionTwoColumns', () => {
    it('should map section two columns if data is empty', () => {
      const data = mapSectionTwoColumns(undefined);
      expect(data.background).toBe(false);
      expect(data.component).toBe('');
      expect(data.sectionId).toBe('');
      expect(data.srcImg).toBe('');
      expect(data.text).toBe('');
      expect(data.title).toBe('');
    });

    it('should map section two columns with data', () => {
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

    it('should handle missing/malformed image', () => {
      const data = mapSectionTwoColumns({
        __component: 'section.section-two-columns',
        title: 'Title',
        description: 'Description',
        image: null,
        metadata: { background: true, section_id: 'test' },
      });

      expect(data.srcImg).toBe('');

      const dataWithMalformedImage = mapSectionTwoColumns({
        __component: 'section.section-two-columns',
        title: 'Title',
        description: 'Description',
        image: {},
        metadata: { background: true, section_id: 'test' },
      });

      expect(dataWithMalformedImage.srcImg).toBe('');
    });
  });

  describe('mapSectionContent', () => {
    it('should map section content with no data', () => {
      const data = mapSectionContent(undefined);
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
  });

  describe('mapTextGrid', () => {
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

    it('should handle null/undefined values in grid items', () => {
      const data = mapTextGrid({
        text_grid: [
          { title: null, description: undefined },
          { title: undefined, description: null },
        ],
      });

      expect(data.grid[0].title).toBe('');
      expect(data.grid[0].description).toBe('');
      expect(data.grid[1].title).toBe('');
      expect(data.grid[1].description).toBe('');
    });
  });

  describe('mapImageGrid', () => {
    it('should map grid image without data', () => {
      const data = mapImageGrid(undefined);

      expect(data.component).toBe('section.section-grid-image');
      expect(data.title).toBe('');
      expect(data.description).toBe('');
      expect(data.grid).toEqual([]);
      expect(data.background).toBe(false);
      expect(data.sectionId).toBe('');
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
      expect(firstImage.large).toBe('large-image1.jpg');
      expect(firstImage.medium).toBe('medium-image1.jpg');
      expect(firstImage.small).toBe('small-image1.jpg');
      expect(firstImage.thumbnail).toBe('thumb-image1.jpg');
    });

    it('should handle multiple images in grid', () => {
      const data = mapImageGrid({
        image_grid: [
          {
            image: [
              {
                alternativeText: 'Image 1',
                formats: { large: { url: 'large1.jpg' } },
              },
              {
                alternativeText: 'Image 2',
                formats: { large: { url: 'large2.jpg' } },
              },
            ],
          },
        ],
      });

      expect(data.grid.length).toBe(2);
      expect(data.grid[0].large).toBe('large1.jpg');
      expect(data.grid[1].large).toBe('large2.jpg');
    });

    it('should handle missing image formats gracefully', () => {
      const data = mapImageGrid({
        image_grid: [
          {
            image: [
              {
                alternativeText: 'Image',
                formats: {
                  large: null,
                  medium: undefined,
                },
              },
            ],
          },
        ],
      });

      expect(data.grid[0].large).toBe('');
      expect(data.grid[0].medium).toBe('');
    });

    it('should handle missing altText in images', () => {
      const data = mapImageGrid({
        image_grid: [
          {
            image: [
              {
                alternativeText: null,
                formats: { large: { url: 'large.jpg' } },
              },
              {
                formats: { large: { url: 'large2.jpg' } },
              },
            ],
          },
        ],
      });

      expect(data.grid[0].altText).toBe('');
      expect(data.grid[1].altText).toBe('');
    });
  });
});
