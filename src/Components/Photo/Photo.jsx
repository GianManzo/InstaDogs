import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { PHOTO_PAGE_GET } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import { Error } from '../Helper/Error'
import { Loading } from '../Helper/Loading'
import { PhotoContent } from './PhotoContent'

export const Photo = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO_PAGE_GET(id)

    request(url, options)
  }, [request, id])
  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Helmet>
          <title>Dogs | {data.photo.title}</title>
          <meta name="description" content="foto do dog" />
        </Helmet>
        <PhotoContent single={true} data={data} />
      </section>
    )
  else return null
}
