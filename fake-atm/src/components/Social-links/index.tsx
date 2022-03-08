import React from 'react'
import { Container } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SocialLinks: React.FC = () => {
  return (
    <Container>
      <p>
        Desenvolvido por
        <span> Tiago Santos</span>
      </p>
      <a href="https://www.linkedin.com/in/tiago-santos-dev">
        <FaLinkedin />
      </a>
      <a href="https://github.com/tiago-santos-dev">
        <FaGithub />
      </a>
    </Container>
  )
}
