import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.p`
  color: #f31;
  margin: 1rem 0;
`
export const Error = ({ error }) => {
  if (!error) return null
  return <ErrorMessage>{error}</ErrorMessage>
}
