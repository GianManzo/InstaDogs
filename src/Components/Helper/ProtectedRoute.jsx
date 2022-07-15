import React from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext)
  return login ? children : <Navigate to="/login" />
}
