import { createSlice } from "@reduxjs/toolkit"

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const initialState = [
    { content: 'If it hurts, do it more often.', votes: 0, id: generateId()},
    { content: 'Adding manpower to a late software project makes it later!', votes: 0, id: generateId()},
    { content: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0, id: generateId()},
    { content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0, id: generateId()},
    { content: 'Premature optimization is the root of all evil.', votes: 0, id: generateId()},
    { content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0, id: generateId()},
    { content: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0, id: generateId()},
    { content: 'The only way to go fast, is to go well.', votes: 0, id: generateId()}
]

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState,
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
        }
    }
})

export const { addAnecdote, vote } = anecdoteSlice.actions
export default anecdoteSlice.reducer