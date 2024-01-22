import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        addAnecdote(state, action) {
            state.push(action.payload)
        },
        vote(state, action) {
            const id = action.payload
            const anecdoteToChange = state.find(a => a.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
            return state.map(anecdote => 
                anecdote.id !== id ? anecdote : changedAnecdote)
        },
        getAnecdotes(state, action) {
            return action.payload
        }
    }
})

export const { addAnecdote, vote, getAnecdotes } = anecdoteSlice.actions

export const initAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(getAnecdotes(anecdotes))
    }
}

export const createAnecdote = content => {
    return async dispatch => {
        const newAnec = await anecdoteService.addAnecdote(content)
        dispatch(addAnecdote(newAnec))
    }
}

export const upvote = (id) => {
    return async dispatch => {
        await anecdoteService.vote(id)
        dispatch(vote(id))
    }
}

export default anecdoteSlice.reducer