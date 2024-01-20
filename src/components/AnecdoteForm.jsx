import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, hideNotification } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = async(event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        const newAnec = await anecdoteService.addAnecdote(content)

        dispatch(addAnecdote(newAnec))
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