import React from 'react'
import styled from 'styled-components'
import BackgroundImg from '../Assets/img/usuario.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../Assets/img/dogs.svg'
import { UserContext } from '../UserContext'

//--Styles
const HeaderTag = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #fff;
  top: 0;
`
const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  a.logo {
    padding: 0.5rem 0;
  }
  a.login {
    color: #333;
    display: flex;
    align-items: center;
  }
  a.login::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${BackgroundImg}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`

export const Header = () => {
  const { data } = React.useContext(UserContext)
  return (
    <HeaderTag>
      <HeaderNav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </HeaderNav>
    </HeaderTag>
  )
}
