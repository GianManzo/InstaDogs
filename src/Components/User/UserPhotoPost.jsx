import React from 'react'
import styled from 'styled-components'
import { Input } from '../Forms/Input'
import { Button } from '../Forms/Button'
import { useForm } from '../../Hooks/useForm'
import { useFetch } from '../../Hooks/useFetch'
import { PHOTO_POST } from '../../api'
import { Error } from '../Helper/Error'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const PhotoPostSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  #img {
    margin-bottom: 1rem;
  }
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`
const PreviewImg = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  ::after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`

export const UserPhotoPost = () => {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = React.useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)

    request(url, options)
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }
  return (
    <PhotoPostSection className="animeLeft">
      <Helmet>
        <title>Dogs | Poste Sua Foto</title>
        <meta name="description" content="Poste sua foto no InstaDogs" />
      </Helmet>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <PreviewImg
            style={{
              background: `url('${img.preview}')`
            }}
          ></PreviewImg>
        )}
      </div>
    </PhotoPostSection>
  )
}
