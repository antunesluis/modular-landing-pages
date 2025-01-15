import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
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
        id: 23,
        section_id: 'intro',
        background: false,
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('home');
    expect(data.title).toBe('generic title');
    expect(data.html).toBe('generic content');
  });
});
