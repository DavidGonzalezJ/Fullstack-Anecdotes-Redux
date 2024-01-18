import { useSelector, useDispatch } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"

//Button component
const Button = ({text,handler}) => <button onClick={handler}>{text}</button>

const Anecdote = ({anecdote, handleClick}) => {
  return(
    <li>
      {anecdote.content} <br />
      has {anecdote.votes} <Button text='vote' handler={handleClick}/>
    </li>
  )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state)
    list.sort(( a, b ) => b.votes - a.votes)

    const upvote = (id) => {
        dispatch(vote(id))
    }

  return (
    <ul>
      { list.map(a => <Anecdote
      anecdote={a}
      key={a.id}
      handleClick={ () => upvote(a.id) }/> )}
    </ul>
  )
}

export default Anecdotes