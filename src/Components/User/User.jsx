import React from 'react'
import { Helmet } from 'react-helmet'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { Feed } from '../Feed/Feed'
import { NotFound } from '../NotFound'
import { UserHeader } from './UserHeader'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStats } from './UserStats'

export const User = () => {
  const { data } = React.useContext(UserContext)
  return (
    <section className="container">
      <Helmet>
        <title>Dogs | Minha Conta</title>
        <meta name="description" content="Home InstaDogs" />
      </Helmet>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}
