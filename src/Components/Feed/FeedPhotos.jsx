import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { FeedPhotoItem } from './FeedPhotoItem'

const PhotosUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
  max-width: 80rem;
  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector(state => state.feed)

  return (
    <PhotosUl className="animeLeft">
      {list.map(photo => (
        <FeedPhotoItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </PhotosUl>
  )
}
