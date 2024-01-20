import { createSlice } from "@reduxjs/toolkit"

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        addAnecdote(state, action) {
            const content = action.payload
            state.push({
                content: content,
                votes: 0,
                id: generateId()
            })
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
export default anecdoteSlice.reducer