'use client';
import React, { ReactNode } from 'react';
import * as Styled from './styles';
import Link from 'next/link';

export type MenuLinkProps = {
  children: ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink: React.FC<MenuLinkProps> = ({
  children,
  link,
  newTab = false,
}) => {
  const target = newTab ? '_blank' : '_self';
  const isInternal = link.startsWith('/');

  if (isInternal) {
    return (
      <Link href={link} passHref legacyBehavior>
        <Styled.Container as="a" target={target}>
          {children}
        </Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container as="a" href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
