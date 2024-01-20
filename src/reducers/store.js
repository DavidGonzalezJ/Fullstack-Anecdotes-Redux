import anecdoteReducer from './anecdoteReducer.js'
import filterReducer from './filterReducer.js'
import notificationReducer from './notificationReducer.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
})

export default store