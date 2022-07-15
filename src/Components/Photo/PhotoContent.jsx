import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PhotoComments } from './PhotoComments'
import ImgViews from '../../Assets/img/visualizacao-black.svg'
import { UserContext } from '../../UserContext'
import { PhotoDelete } from './PhotoDelete'
import { Image } from '../Helper/Image'

const Views = styled.span`
  ::before {
    content: '';
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    display: inline-block;
    background: url(${ImgViews});
  }
`
const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  li {
    margin-right: 2rem;
    ::before {
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: #333;
      margin-top: 5px;
    }
  }
`
const Author = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a:hover {
    text-decoration: underline;
  }
`
const Photo = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;
  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }
  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`
const Details = styled.div`
  padding: 2rem 2rem 0 2rem;
`
const BoxImg = styled.div`
  grid-row: 1/4;
  @media (max-width: 64rem) {
    grid-row: 1;
  }
`
export const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext)
  const { photo, comments } = data

  return (
    <Photo
      style={{ gridTemplateColumns: single && '1fr', height: single && 'auto' }}
    >
      <BoxImg
        style={{
          gridRow: single && '1',
          borderRadius: single && '0.4rem',
          overflow: single && 'hidden'
        }}
      >
        <Image src={photo.src} alt={photo.title} />
      </BoxImg>
      <Details style={{ padding: single && '1rem 0px 0px 0px' }}>
        <div>
          <Author>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <Views>{photo.acessos}</Views>
          </Author>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <Attributes>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} anos</li>
          </Attributes>
        </div>
      </Details>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </Photo>
  )
}
