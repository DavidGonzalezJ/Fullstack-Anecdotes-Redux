import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(content))
    }

    return(
        <>
            <h2>Create new</h2>
            <form onSubmit={newAnecdote}>
                <input name="anecdote" /><br />
                <button type="submit">create</button>
            </form>
        </>
    )
}

export default AnecdoteForm