'use client';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

// Definindo props padrão
Footer.defaultProps = {
  className: '',
  'data-testid': 'footer',
};
