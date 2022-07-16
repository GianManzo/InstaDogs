import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { PhotoFormComments } from './PhotoFormComments'

const Comments = styled.ul`
  padding: 0 2rem;
  overflow-y: auto;
  word-break: break-word;
  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`

export const PhotoComments = props => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commentsSection = React.useRef(null)
  const { data } = useSelector(state => state.user)

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <Comments style={{ padding: props.single && '0' }} ref={commentsSection}>
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </Comments>
      {data && (
        <PhotoFormComments
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  )
}
