// src/templates/Home/index.jsx
'use client';

import P from 'prop-types';
import { GridTwoColumns } from '@/components/GridTwoColumns';
import { GridText } from '@/components/GridText';
import { GridImage } from '@/components/GridImage';
import { GridContent } from '@/components/GridContent';
import { Base } from '@/templates/Base';
import { PageNotFound } from '@/templates/PageNotFound';

function Home({ data }) {
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
      {/* Removido o Head pois no App Router usamos metadata() */}
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

Home.propTypes = {
  data: P.array,
};

export default Home;
