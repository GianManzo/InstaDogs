import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPhoto } from '../../store/photo'
import { Error } from '../Helper/Error'
import { Loading } from '../Helper/Loading'
import { PhotoContent } from './PhotoContent'

export const Photo = () => {
  const { id } = useParams()
  const { loading, error, data } = useSelector(state => state.photo)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchPhoto(id))
  }, [dispatch, id])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Helmet>
          <title>Dogs | {data.photo.title}</title>
          <meta name="description" content="foto do dog" />
        </Helmet>
        <PhotoContent single={true} />
      </section>
    )
  else return null
}
