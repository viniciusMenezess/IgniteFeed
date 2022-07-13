import styled from "styled-components";

export const Container = styled.div`
  margin-top:1.5rem;
  display:flex;
  gap:1rem;
`

export const CommentBox = styled.div`
  flex: 1;

  > footer {
    margin-top:1rem;

    > button {
      background: transparent;
      border:0;
      color:${({theme}) => theme.COLORS.GRRAY_400};
      cursor:pointer;

      display:flex;
      align-items:center;

      border-radius:2px;

      svg {
        margin-right:0.5rem;
      }
      
      &:hover {
        color: ${({theme}) => theme.COLORS.GREEN_300};
      }

      span {
        padding: 0 0.25rem;
      }
    }
  }
`

export const CommentContent = styled.div`
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding:1rem;

  > header {
    display:flex;
    align-items: flex-start;
    justify-content:space-between;

    button {
      background:transparent;
      border:none;
      color: ${({theme}) => theme.COLORS.GRAY_400};
      cursor:pointer;

      line-height:0;
      border-radius:2px;

      :hover {
        color: ${({theme}) => theme.COLORS.RED_500}
      }
    }
  }

  > p {
    margin-top:1rem;
    color: ${({theme}) => theme.COLORS.GRAY_300};
  } 
`

export const Author = styled.div`
  display:flex;
  flex-direction: column;

  > strong {
    font-size:0.875rem;
    line-height:1.6;
  }

  > time {
    font-size: 0.75rem;
    line-height:1.6;
    color:${({theme}) => theme.COLORS.GRAY_400};
  }
`