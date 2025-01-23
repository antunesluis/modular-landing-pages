'use client';

import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '@/components/GridTwoColumns';
import { GridContent, GridContentProps } from '@/components/GridContent';
import { GridText, GridTextProps } from '@/components/GridText';
import { GridImage, GridImageProps } from '@/components/GridImage';
import { LogoLinkProps } from '@/components/LogoLink';
import { MenuLinkProps } from '@/components/MenuLink';

import { Base } from '@/templates/Base';
import { PageNotFound } from '@/templates/PageNotFound';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};
export type SectionProps = {
  component: string;
} & (GridImageProps | GridTextProps | GridTwoColumnsProps | GridContentProps);

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
  if (!data || !data.length) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section: SectionProps, index: number) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        // Consider using a switch statement or object mapping for cleaner rendering
        switch (component) {
          case 'section.section-two-columns':
            return (
              <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
            );
          case 'section.section-content':
            return <GridContent key={key} {...(section as GridContentProps)} />;
          case 'section.section-grid-text':
            return <GridText key={key} {...(section as GridTextProps)} />;
          case 'section.section-grid-image':
            return <GridImage key={key} {...(section as GridImageProps)} />;
          default:
            return null;
        }
      })}
    </Base>
  );
}

export default Home;
