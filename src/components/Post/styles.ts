import styled from "styled-components";

export const Container = styled.article`
  background: ${({theme}) => theme.COLORS.GRAY_800};
  border-radius:8px;
  padding:2.5rem;

  & + & {
    margin-top:2rem;
  }

  > header {
    display:flex;
    align-items: center;
    justify-content: space-between;

    > time {
      font-size:0.875rem;
      color: ${({theme}) => theme.COLORS.GRAY_400};
    }
  }
`

export const Author = styled.div`
  display:flex;
  align-items: center;
  gap:1rem;

  > div {
    display:flex;
    flex-direction:column;

    strong {
      color: ${({theme}) => theme.COLORS.GRAY_100};
      line-height:1.6;
    }

    span {
      font-size:0.875rem;
      color: ${({theme}) => theme.COLORS.GRAY_400};
      line-height:1.6;
    }
  }
`


export const Content = styled.div`
  line-height:1.6;
  color: ${({theme}) => theme.COLORS.GRAY_300};
  margin-top:1.5rem;

  > p {
    margin-top:1rem;

    a {
      font-weight: bold;
      color: ${({theme}) => theme.COLORS.GREEN_500};
      text-decoration: none;

      &:hover {
        color: ${({theme}) => theme.COLORS.GREEN_300}
      }
    }
  }
`

export const CommentForm = styled.form`
  width:100%;
  margin-top:1.5rem;
  padding-top:1.5rem;
  border-top: 1px solid ${({theme}) => theme.COLORS.GRAY_600};

  :focus-within footer {
    visibility: visible;
    max-height:none;
  } 

  > strong {
    line-height:1.6%;
    color: ${({theme}) => theme.COLORS.GRAY_100}
  }

  textarea {
    width:100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_900};
    border:0;
    resize: none;
    height:6rem;
    padding:1rem;
    border-radius:8px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    line-height:1.4;
    margin-top: 1rem;

  }

  > footer {
    visibility: hidden;
    max-height:0;

    > button {
      padding: 1rem 1.5rem;
      margin-top:1rem;
      border-radius:8px;
      border:0;
      background-color: ${({theme}) => theme.COLORS.GREEN_500};
      color: ${({theme}) => theme.COLORS.WHITE};
      font-weight:bold;
      cursor:pointer;

      transition: background-color 0.1s;
      :not(:disabled):hover {
        background-color: ${({theme}) => theme.COLORS.GREEN_300}
      }

      :disabled {
        opacity: 0.7;
        cursor:not-allowed;
      }
    }
  }
`

export const CommentList = styled.div`
  margin-top: 2rem;
`