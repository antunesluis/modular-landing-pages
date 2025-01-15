export const mapSections = (sections = []) => {
  return sections.map((section) => {
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

export const mapTextGrid = (section = {}) => {
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
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  /*{
          "__component": "section.section-grid",
          "id": 12,
          "title": "Project Gallery",
          "description": "Discover some of the transformative projects we have developed for our clients. Each solution is unique and designed to maximize results.",
          "text_grid": [],
          "image_grid": [
            {
              "id": 31,
              "image": [
                {
                  "id": 9,
                  "documentId": "b3eh58v2qptfi6bcy2gf2l6l",
                  "name": "ecomerce.jpg",
                  "alternativeText": "E-commerce Platform",
                  "caption": null,
                  "width": 2400,
                  "height": 1600,
                  "formats": {
                    "large": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dwteglerk/image/upload/v1736823822/large_ecomerce_3f6d7faf2a.jpg",
                      "hash": "large_ecomerce_3f6d7faf2a",
                      "mime": "image/jpeg",
                      "name": "large_ecomerce.jpg",
                      "path": null,
                      "size": 67.14,
                      "width": 1000,
                      "height": 667,
                      "sizeInBytes": 67143,
                      "provider_metadata": {
                        "public_id": "large_ecomerce_3f6d7faf2a",
                        "resource_type": "image"
                      }
                    },
                    "small": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dwteglerk/image/upload/v1736823822/small_ecomerce_3f6d7faf2a.jpg",
                      "hash": "small_ecomerce_3f6d7faf2a",
                      "mime": "image/jpeg",
                      "name": "small_ecomerce.jpg",
                      "path": null,
                      "size": 24.37,
                      "width": 500,
                      "height": 333,
                      "sizeInBytes": 24367,
                      "provider_metadata": {
                        "public_id": "small_ecomerce_3f6d7faf2a",
                        "resource_type": "image"
                      }
                    },
                    "medium": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dwteglerk/image/upload/v1736823822/medium_ecomerce_3f6d7faf2a.jpg",
                      "hash": "medium_ecomerce_3f6d7faf2a",
                      "mime": "image/jpeg",
                      "name": "medium_ecomerce.jpg",
                      "path": null,
                      "size": 43.84,
                      "width": 750,
                      "height": 500,
                      "sizeInBytes": 43842,
                      "provider_metadata": {
                        "public_id": "medium_ecomerce_3f6d7faf2a",
                        "resource_type": "image"
                      }
                    },
                    "thumbnail": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dwteglerk/image/upload/v1736823821/thumbnail_ecomerce_3f6d7faf2a.jpg",
                      "hash": "thumbnail_ecomerce_3f6d7faf2a",
                      "mime": "image/jpeg",
                      "name": "thumbnail_ecomerce.jpg",
                      "path": null,
                      "size": 7.83,
                      "width": 234,
                      "height": 156,
                      "sizeInBytes": 7834,
                      "provider_metadata": {
                        "public_id": "thumbnail_ecomerce_3f6d7faf2a",
                        "resource_type": "image"
                      }
                    }
                  },
                  "hash": "ecomerce_3f6d7faf2a",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 274.6,
                  "url": "https://res.cloudinary.com/dwteglerk/image/upload/v1736823822/ecomerce_3f6d7faf2a.jpg",
                  "previewUrl": null,
                  "provider": "@strapi/provider-upload-cloudinary",
                  "provider_metadata": {
                    "public_id": "ecomerce_3f6d7faf2a",
                    "resource_type": "image"
                  },
                  "createdAt": "2025-01-14T03:03:42.886Z",
                  "updatedAt": "2025-01-14T03:19:42.785Z",
                  "publishedAt": "2025-01-14T03:03:42.886Z"
                }
              ]
            },
          ]
        }
      ],
 */
};
