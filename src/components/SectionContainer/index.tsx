'use client';
import React from 'react';
import * as Styled from './styles';

export type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
}) => {
  return <Styled.Container>{children}</Styled.Container>;
};
