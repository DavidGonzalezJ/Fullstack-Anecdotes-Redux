import anecdoteReducer from './anecdoteReducer.js'
import filterReducer from './filterReducer.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer
    }
})

export default store