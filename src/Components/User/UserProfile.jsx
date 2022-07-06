import React from 'react'
import { useParams } from 'react-router-dom'
import { Feed } from '../Feed/Feed'
import { Helmet } from 'react-helmet'

export const UserProfile = () => {
  const { user } = useParams()
  return (
    <section className="container mainContainer">
      <Helmet>
        <title>Dogs | {user}</title>
        <meta name="description" content="perfil de usuario InstaDogs" />
      </Helmet>
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  )
}
