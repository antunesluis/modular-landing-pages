'use client';
import React from 'react';
import * as Styled from './styles';

interface TextComponentProps {
  children: React.ReactNode;
}

export const TextComponent: React.FC<TextComponentProps> = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};
