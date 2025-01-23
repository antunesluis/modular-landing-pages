'use client';

import React from 'react';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

interface GridItem {
  large?: string;
  medium?: string;
  small?: string;
  thumbnail?: string;
  altText: string;
  srcImg?: string;
}

interface GridImageProps {
  background?: boolean;
  title: string;
  description: string;
  grid: GridItem[];
  sectionId?: string;
}

export const GridImage: React.FC<GridImageProps> = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el: GridItem) => (
            <Styled.GridElement
              key={`${el.large || el.medium || el.small}${el.altText}`}
            >
              <Styled.Image
                src={
                  el.large || el.medium || el.small || el.thumbnail || el.srcImg
                }
                alt={el.altText}
                loading="lazy"
              />
              <Styled.ImageCaption>{el.altText}</Styled.ImageCaption>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
