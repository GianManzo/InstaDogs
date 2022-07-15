import React from 'react'
import styled from 'styled-components'
import { COMMENT_POST } from '../../api'
import { ReactComponent as Enviar } from '../../Assets/img/enviar.svg'
import { useFetch } from '../../Hooks/useFetch'
import { Error } from '../Helper/Error'

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: var(--type-first);
  resize: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #eee;
  transition: 0.2s;
  :focus,
  :hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`
const BtnSubmit = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;
  :focus svg path,
  :hover svg path {
    fill: #fea;
    stroke: #fb1;
  }
  :focus svg g,
  :hover svg g {
    animation: bark 0.6s infinite;
  }
  @keyframes bark {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`

export const PhotoFormComments = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState('')
  const { request, error } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments(comments => [...comments, json])
    }
  }

  return (
    <Form onSubmit={handleSubmit} style={{ marginInline: single && '0' }}>
      <TextArea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <BtnSubmit>{<Enviar />}</BtnSubmit>
      <Error error={error} />
    </Form>
  )
}
