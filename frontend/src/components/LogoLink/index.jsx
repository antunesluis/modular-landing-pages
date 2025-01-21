'use client';
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';

export const LogoLink = ({ text, srcImg = '', link }) => {
  const isInternal = link.match(/^\//) ? true : false;
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

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
