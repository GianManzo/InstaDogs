import React from 'react'
import styled from 'styled-components'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginForm } from './LoginForm'
import { LoginCreate } from './LoginCreate'
import { LoginPasswordLost } from './LoginPasswordLost'
import { LoginPasswordReset } from './LoginPasswordReset'
import ImgLogin from '../../../Assets/img/login.jpg'
import { NotFound } from '../../NotFound'
import { useSelector } from 'react-redux'
import { Loading } from '../../Helper/Loading'

const LoginSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;
  ::before {
    display: block;
    content: '';
    background: url(${ImgLogin}) no-repeat center center;
    background-size: cover;
  }
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    ::before {
      display: none;
    }
  }
`
const LoginStyle = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;
  @media (max-width: 40rem) {
    max-width: 100%;
  }
`

export const Login = () => {
  const { data, loading } = useSelector(state => state.user)

  if (loading) return <Loading />
  if (data) return <Navigate to="/conta" />
  return (
    <LoginSection>
      <LoginStyle>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoginStyle>
    </LoginSection>
  )
}
