import React from 'react'
import { Helmet } from 'react-helmet'
import { Feed } from '../Feed/Feed'

export const Home = () => {
  return (
    <section className="mainContainer">
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Home InstaDogs" />
      </Helmet>
      <Feed />
    </section>
  )
}
