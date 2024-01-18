import PropTypes from 'prop-types'
import Filter from './Filter'
import { useSelector, useDispatch } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"

//Button component
const Button = ({ text, handler }) => <button onClick={handler}>{text}</button>

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
} 

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <li>
      {anecdote.content} <br />
      has {anecdote.votes} <Button text='vote' handler={handleClick}/>
    </li>
  )
}

Anecdote.propTypes = {
  anecdote: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
} 

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const list = useSelector( 
      state =>  state.anecdotes.filter(anecdote =>
        anecdote.content.includes(state.filter))
    )
    list.sort(( a, b ) => b.votes - a.votes)

    const upvote = (id) => {
        dispatch(vote(id))
    }

  return (
    <>
      <h1>Anecdotes</h1>
      <Filter/>
      <ul>
        { list.map(a => <Anecdote
        anecdote={a}
        key={a.id}
        handleClick={ () => upvote(a.id) }/> )}
      </ul>
    </>
  )
}

export default AnecdoteList