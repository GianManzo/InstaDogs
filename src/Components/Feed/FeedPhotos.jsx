import React from 'react'
import styled from 'styled-components'
import { FeedPhotoItem } from './FeedPhotoItem'
import { useFetch } from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import { Error } from '../Helper/Error'
import { Loading } from '../Helper/Loading'

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

export const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])
  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <PhotosUl className="animeLeft">
        {data.map(photo => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </PhotosUl>
    )
  else return null
}
