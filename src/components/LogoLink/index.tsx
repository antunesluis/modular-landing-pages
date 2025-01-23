'use client';
import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink: React.FC<LogoLinkProps> = ({
  text,
  srcImg = '',
  link,
}) => {
  const isInternal = link.startsWith('/');
  const content = (
    <>
      {!!srcImg && <img src={srcImg} alt={text} />}
      {!srcImg && text}
    </>
  );

  return (
    <Heading size="small" uppercase>
      {isInternal ? (
        <Link href={link} passHref legacyBehavior>
          <Styled.Container>{content}</Styled.Container>
        </Link>
      ) : (
        <Styled.Container href={link}>{content}</Styled.Container>
      )}
    </Heading>
  );
};
