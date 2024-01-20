import AnecdoteList from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { getAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAll().then(anecs =>
      dispatch(getAnecdotes(anecs)))
  }, [])
  

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App