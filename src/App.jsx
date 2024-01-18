import AnecdoteList from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import { useDispatch } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  dispatch(initAnecdotes())

  return (
    <div>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App