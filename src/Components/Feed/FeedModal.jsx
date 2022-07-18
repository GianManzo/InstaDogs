import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { closeModal } from '../../store/ui'
import { Error } from '../Helper/Error'
import { Loading } from '../Helper/Loading'
import { PhotoContent } from '../Photo/PhotoContent'

const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;
  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`

export const FeedModal = () => {
  const { modal } = useSelector(state => state.ui)
  const { loading, error, data } = useSelector(state => state.photo)
  const dispatch = useDispatch()

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) dispatch(closeModal())
  }

  React.useEffect(() => {
    dispatch(closeModal())
  }, [dispatch])

  if (!modal) return null

  return (
    <Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </Modal>
  )
}
