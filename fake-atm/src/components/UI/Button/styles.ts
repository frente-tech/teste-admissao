import styled from 'styled-components';

export const Container = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.primary};
  color: #ffff;
  font-weight: 500;
  text-transform: uppercase;
  border: 0;
  border-radius: 0.4rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
