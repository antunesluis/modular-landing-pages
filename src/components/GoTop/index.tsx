'use client';
import React from 'react';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export type GoTopProps = {
  handleClick?: () => void;
};

export const GoTop: React.FC<GoTopProps> = ({ handleClick }) => {
  const defaultHandleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Styled.Container
      href="#"
      onClick={handleClick || defaultHandleClick}
      aria-label="Go to top"
      title="Go to top"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
