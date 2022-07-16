import React from 'react'
import { Input } from '../../Forms/Input'
import { Button } from '../../Forms/Button'
import { useForm } from '../../../Hooks/useForm'
import { USER_POST } from '../../../api'
import { useFetch } from '../../../Hooks/useFetch'
import { Error } from '../../Helper/Error'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../../store/user'

export const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm({
    /*'password'*/
  })
  const dispatch = useDispatch()

  const { loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if (response.ok) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      )
    }
  }

  return (
    <section className="animeLeft">
      <Helmet>
        <title>Dogs | Criar Conta</title>
        <meta name="description" content="Crie sua conta no InstaDogs" />
      </Helmet>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}
