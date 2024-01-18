const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const anecdoteReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_INITIAL_STATE':{
            return (
                [
                    { content: 'If it hurts, do it more often.', votes: 0, id: generateId()},
                    { content: 'Adding manpower to a late software project makes it later!', votes: 0, id: generateId()},
                    { content: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0, id: generateId()},
                    { content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0, id: generateId()},
                    { content: 'Premature optimization is the root of all evil.', votes: 0, id: generateId()},
                    { content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0, id: generateId()},
                    { content: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0, id: generateId()},
                    { content: 'The only way to go fast, is to go well.', votes: 0, id: generateId()}
                ]
            )
        }
        case 'VOTE': {
            const id = action.payload.id
            const anecdoteToChange = state.find(a => a.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
            return state.map(anecdote => 
                anecdote.id !== id ? anecdote : changedAnecdote)
        }
        case 'NEW_ANECDOTE': {
            return [...state, action.payload]
        }
        default:
            return state
    }
}

export const vote = (id) => {
    return {
        type: 'VOTE',
        payload: { id }
    }
}

export const initAnecdotes = () => {
    return {
        type: 'CREATE_INITIAL_STATE'
    }
}

export const addAnecdote = (content) => {
    return {
        type: 'NEW_ANECDOTE',
        payload: {
            content: content,
            votes: 0,
            id: generateId()
        }
    }
}

export default anecdoteReducer