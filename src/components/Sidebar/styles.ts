import styled from "styled-components";

export const Container = styled.aside`
  background: ${({theme}) => theme.COLORS.GRAY_800};
  border-radius:8px;
  overflow:hidden;

  > img {
    width:100%;
    height:72px;
    object-fit:cover;
  }
`

export const Profile = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  margin-top: calc(0px - 1.5rem - 6px);
  

  > img {
    width:calc(3rem + 12px);
    height:calc(3rem + 12px);
    border-radius:8px;
    border: 4px solid ${({theme}) => theme.COLORS.GRAY_800};
    outline: 2px solid ${({theme}) => theme.COLORS.GREEN_500};
  }

  > strong {
    margin-top:1rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    line-height: 1.6;
  }

  > span {
    font-size:0.875rem;
    color: ${({theme}) => theme.COLORS.GRAY_400};
    line-height: 1.6;
  } 
`

export const Footer = styled.footer`
  border-top:1px solid ${({theme}) => theme.COLORS.GRAY_600};
  margin-top:1.5rem;
  padding:1.5rem 2rem 2rem;

  > a {
    width:100%;
    background:transparent;
    color : ${({theme}) => theme.COLORS.GREEN_500};
    border:1px solid ${({theme}) => theme.COLORS.GREEN_500};
    border-radius: 8px;
    height:50px;
    font-weight: bold;
    text-decoration: none;

    display:flex;
    align-items:center;
    justify-content: center;

    gap:0.75rem;

    transition:.1s;

    &:hover {
      
      background:${({theme}) => theme.COLORS.GREEN_500};
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`