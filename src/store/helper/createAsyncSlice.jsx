import { createSlice } from '@reduxjs/toolkit'
/**
 * @param {object} config
 * @param {string} config.name
 * @param {object} config.initialState
 * @param {object} config.reducers
 * @param {function} config.fetchConfig
 */

const createAsyncSlice = config => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true
      },
      fetchSuccess(state, action) {
        state.loading = false
        state.data = action.payload
        state.error = null
      },
      fetchError(state, action) {
        state.loading = false
        state.data = null
        state.error = action.error
      },
      ...config.reducers
    }
  })

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions

  const asyncAction = payload => async dispatch => {
    try {
      dispatch(fetchStarted())
      const { url, options } = config.fetchConfig(payload)
      const reponse = await fetch(url, options)
      const data = await reponse.json()
      if (Response.ok === false) throw new Error(data.message)
      return dispatch(fetchSuccess(data))
    } catch (error) {
      return dispatch(fetchError(error.message))
    }
  }
  return { ...slice, asyncAction }
}

export default createAsyncSlice
