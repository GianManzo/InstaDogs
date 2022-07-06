import React from 'react'
import styled from 'styled-components'
import { PHOTO_DELETE } from '../../api'
import { useFetch } from '../../Hooks/useFetch'

const Delete = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;
  :focus,
  :hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja excluir esta foto?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }
  return (
    <>
      {loading ? (
        <Delete disabled>Deletando...</Delete>
      ) : (
        <Delete onClick={handleClick}>Deletar</Delete>
      )}
    </>
  )
}
