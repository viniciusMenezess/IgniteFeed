import { Container } from './styles'

import igniteLogo from "../../assets/ignite_logo.svg"

export function Header() {
  return(
    <Container>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </Container>
  )
}