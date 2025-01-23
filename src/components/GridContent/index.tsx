'use client';
import React from 'react';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type GridContentProps = {
  title: string;
  html: string;
  background?: boolean;
  sectionId?: string;
};

export const GridContent: React.FC<GridContentProps> = ({
  title,
  html,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.HtmlContent>
          <TextComponent>{html}</TextComponent>
        </Styled.HtmlContent>
      </Styled.Container>
    </SectionBackground>
  );
};
