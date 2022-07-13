import styled from 'styled-components';

export const Container = styled.header`
  padding: 1.25rem 0;

  display:flex;
  align-items:center;
  justify-content:center;


  background: ${({theme}) => theme.COLORS.GRAY_800};

  > img {
    height:2rem;
  }
`