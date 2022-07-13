import { ImgHTMLAttributes } from 'react'
import { Container } from './styles'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = false, ...rest }: AvatarProps) {
  return (
    <Container>
      <img className={hasBorder ? 'avatarWithBorder' : 'avatar'} {...rest} />
    </Container>
  )
}
