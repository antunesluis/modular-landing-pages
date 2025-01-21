'use client';
import P from 'prop-types';
import * as Styled from './styles';
import Link from 'next/link';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  const isInternal = link.match(/^\//) ? true : false;

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

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
