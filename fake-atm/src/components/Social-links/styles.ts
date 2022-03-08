import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  color: ${props => props.theme.colors.primary};
  span {
    font-weight: 700;
  }
  a {
    margin-left: 1rem;
  }

  a + a {
    margin-left: 0.5rem;
  }
`;
