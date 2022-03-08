import React from 'react'
import logo from '@assets/logo.svg'
import {
  Container,
  LogoContainer,
  PhoneNumberContainer
} from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="ts corretora" />
      </LogoContainer>
      <PhoneNumberContainer>
        (xx) xxxxx-xxxx
      </PhoneNumberContainer>
    </Container>

  )
}
