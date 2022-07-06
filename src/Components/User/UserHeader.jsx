import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { UserHeaderNav } from './UserHeaderNav'

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;
`

export const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto')
        break
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <Header>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </Header>
  )
}
