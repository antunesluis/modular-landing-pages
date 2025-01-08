import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridImage = ({ title, description, grid, background = false }) => {
  // Função para lidar com erros de carregamento de imagem
  const handleImageError = (e) => {
    e.target.src =
      'https://via.placeholder.com/500x500?text=Imagem+não+encontrada';
  };

  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
              <Styled.Image
                src={el.srcImg}
                alt={el.altText}
                onError={handleImageError}
                loading="lazy" // Melhora performance carregando imagens sob demanda
              />
              <Styled.ImageCaption>{el.altText}</Styled.ImageCaption>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
};
