import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Styled.Container
      href="#"
      aria-label="Go to top"
      title="Go to top"
      onClick={handleClick}
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
