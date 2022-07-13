import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import { Container, CommentBox, CommentContent, Author } from './styles'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1
    })
  }

  return (
    <Container>
      <Avatar src="https://github.com/diego3g.png" />

      <CommentBox>
        <CommentContent>
          <header>
            <Author>
              <strong>Diego Fernandes</strong>
              <time title="06 de julho às 23:18" dateTime="2022-07-06 23:18:30">
                Cerca de 1h atrás
              </time>
            </Author>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </CommentContent>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir - <span>{likeCount}</span>
          </button>
        </footer>
      </CommentBox>
    </Container>
  )
}
