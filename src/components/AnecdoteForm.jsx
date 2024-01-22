import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, hideNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = async(event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createAnecdote(content))
        dispatch(setNotification(`Created notification: '${content}'`))
        setTimeout(() => dispatch(hideNotification()), 5000)
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