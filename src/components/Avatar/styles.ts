import styled from 'styled-components'

export const Container = styled.div`
  > .avatar {
    width:3rem;
    height:3rem;
    border-radius:8px;
  } 

  .avatarWithBorder {
    width:calc(3rem + 12px);
    height:calc(3rem + 12px);
    border-radius:8px;
    border: 4px solid ${({theme}) => theme.COLORS.GRAY_800};
    outline: 2px solid ${({theme}) => theme.COLORS.GREEN_500};
  }
`