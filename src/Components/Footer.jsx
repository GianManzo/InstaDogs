import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Dogs } from '../Assets/img/dogs.svg'

const FooterDogs = styled.footer`
  background: #fb1;
  padding: 3rem 1rem 0 1rem;
  height: 10rem;
  text-align: center;
  color: #764701;
  p {
    margin-top: 1rem;
  }
`

export const Footer = () => {
  return (
    <FooterDogs>
      <Dogs />
      <p>Dogs. Todos os direitos reservados!</p>
    </FooterDogs>
  )
}
