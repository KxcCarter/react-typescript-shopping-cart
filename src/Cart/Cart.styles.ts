import styled from 'styled-components';

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  /* max-width: 90vw; */
  padding: 20px;

  @media screen and (max-width: 400px) {
    width: 275px;
  }
`;
