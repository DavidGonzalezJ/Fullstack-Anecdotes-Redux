import AnecdoteList from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import { useDispatch } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  dispatch(initAnecdotes())

  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdoteForm/>
      <AnecdoteList/>
    </div>
  )
}

export default App