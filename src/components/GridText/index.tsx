'use client';

import React from 'react';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridItem = {
  title: string;
  description: string;
};

export type GridTextProps = {
  component?: string;
  title: string;
  description: string;
  grid: GridItem[];
  background?: boolean;
  sectionId?: string;
};

export const GridText: React.FC<GridTextProps> = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridTextProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase size="huge" colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>

        <Styled.Grid role="grid">
          {grid.map((element: GridItem, index: number) => (
            <Styled.GridElement key={element.title} role="article">
              <Styled.HeaderContainer>
                <Styled.CardNumber>{index + 1}</Styled.CardNumber>{' '}
                <Heading size="medium" colorDark={!background} as="h3">
                  {element.title}
                </Heading>
              </Styled.HeaderContainer>
              <TextComponent>{element.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
