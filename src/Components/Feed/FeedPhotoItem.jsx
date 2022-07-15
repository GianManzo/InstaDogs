import React from 'react'
import styled from 'styled-components'
import imgViews from '../../Assets/img/visualizacao.svg'
import { Image } from '../Helper/Image'

const PhotoLi = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;
  div {
    grid-area: 1/1;
  }
  :hover {
    span {
      display: flex;
    }
  }
  :nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
    @media (max-width: 40rem) {
      grid-column: initial;
      grid-row: span initial;
    }
  }
`
const Views = styled.span`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  grid-area: 1/1;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: none;
  ::before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${imgViews}) no-repeat;
  }
`

export const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }
  return (
    <PhotoLi onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <Views>{photo.acessos}</Views>
    </PhotoLi>
  )
}
