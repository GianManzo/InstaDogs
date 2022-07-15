import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'

const contador = () => 0

const middleware = [...getDefaultMiddleware()]
const reducer = combineReducers({ contador })
const store = configureStore({ reducer, middleware })

export default store
