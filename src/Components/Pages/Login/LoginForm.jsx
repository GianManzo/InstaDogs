import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Input } from '../../Forms/Input'
import { Button } from '../../Forms/Button'
import { ButtonForm } from '../../Forms/Button'
import { useForm } from '../../../Hooks/useForm'
import { UserContext } from '../../../UserContext'
import { Error } from '../../Helper/Error'
import { Helmet } from 'react-helmet'

const FormSection = styled.section`
  a.resetSenha {
    display: inline-block;
    color: #666;
    padding: 0.5rem;
    line-height: 1;
    ::after {
      content: '';
      height: 2px;
      width: 100%;
      background: currentColor;
      display: block;
    }
  }
`
const Form = styled.form`
  margin-bottom: 2rem;
`
const Cadastro = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  p {
    margin-block: 2rem;
  }
`
const SubTitle = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;
  ::after {
    content: '';
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`

export const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <FormSection className="animeLeft">
      <Helmet>
        <title>Dogs | Faça Login</title>
        <meta name="description" content="Faça login InstaDogs" />
      </Helmet>
      <h1 className="title">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos'} />
      </Form>
      <Link className="resetSenha" to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <Cadastro>
        <SubTitle>Cadastre-se</SubTitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="btnCriar" to="/login/criar">
          <ButtonForm>Cadastro</ButtonForm>
        </Link>
      </Cadastro>
    </FormSection>
  )
}
