'use client';

import React from 'react';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  children,
  background = false,
  sectionId = '',
}) => {
  return (
    <Styled.Container $background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
