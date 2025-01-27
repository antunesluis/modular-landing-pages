'use client';
import React from 'react';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export type NavLinksProps = {
  links?: Array<{
    children: string;
    link: string;
    newTab?: boolean;
  }>;
};

export const NavLinks: React.FC<NavLinksProps> = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};
