export const mapSections = (sections = []) => {
  return sections.map((section) => {
    const { __component: component } = section;

    if (component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (component === 'section.section-grid') {
      return mapSectionGrid(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = '',
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  return section;
};

export const mapSectionGrid = (section = {}) => {
  return section;
};
