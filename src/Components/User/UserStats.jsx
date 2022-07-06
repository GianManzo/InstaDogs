import React from 'react'
import { Helmet } from 'react-helmet'
import { GET_STATS } from '../../api'
import { Loading } from '../Helper/Loading'
import { Error } from '../Helper/Error'
import { useFetch } from '../../Hooks/useFetch'

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

export const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Helmet>
          <title>Dogs | Estatísticas</title>
          <meta name="description" content="Home InstaDogs" />
        </Helmet>
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  else return null
}
