import type { Schema, Struct } from '@strapi/strapi';

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'menu';
    icon: 'grid';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    logo_link: Schema.Attribute.Text & Schema.Attribute.Required;
    logo_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 2;
      }>;
    menu_links: Schema.Attribute.Component<'menu.menu-link', true>;
  };
}

export interface MenuMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    icon: 'exit';
  };
  attributes: {
    link_text: Schema.Attribute.String & Schema.Attribute.Required;
    open_in_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface SectionImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'image-grid';
    icon: 'cog';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SectionSectionContent extends Struct.ComponentSchema {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 5;
      }>;
  };
}

export interface SectionSectionGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_section_grids';
  info: {
    description: '';
    displayName: 'section_grid';
    icon: 'crop';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image_grid: Schema.Attribute.Component<'section.image-grid', true>;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    text_grid: Schema.Attribute.Component<'section.text-grid', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 5;
      }>;
  };
}

export interface SectionSectionMetadata extends Struct.ComponentSchema {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'cog';
  };
  attributes: {
    background: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 3;
      }>;
    section_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 3;
      }>;
  };
}

export interface SectionSectionTwoColumns extends Struct.ComponentSchema {
  collectionName: 'components_section_section_two_columns';
  info: {
    description: '';
    displayName: 'section_two_columns';
    icon: 'cog';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 5;
      }>;
  };
}

export interface SectionTextGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
    icon: 'cog';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 5;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.menu': MenuMenu;
      'menu.menu-link': MenuMenuLink;
      'section.image-grid': SectionImageGrid;
      'section.section-content': SectionSectionContent;
      'section.section-grid': SectionSectionGrid;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.text-grid': SectionTextGrid;
    }
  }
}
