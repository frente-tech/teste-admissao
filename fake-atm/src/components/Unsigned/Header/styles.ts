import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin-top: 2rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

export const LogoContainer = styled.div`
  grid-column: 2;
`;

export const PhoneNumberContainer = styled.p`
  font-weight: 700;
  grid-column: 3;
`;
