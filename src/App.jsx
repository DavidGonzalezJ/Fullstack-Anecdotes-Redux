//import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Anecdotes from './components/Anecdotes'
import { initAnecdotes } from './reducers/anecdoteReducer'

//Aux method for getting a random int
/*const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}*/

const App = () => {
  const dispatch = useDispatch()
  dispatch(initAnecdotes())

  /*const giveRandomAnecdote = () =>{
    let num
    do {
      num = getRandomInt(anecdotes.length)
    } while (num === selected);
    setSelected(num)
  }*/

  /*const vote = () =>{
    const copy = [...votes]
    copy[selected] += 1


    if(copy[selected] >= copy[mostVoted]){
      setMostVoted(selected)
    }
    setVotes(copy)
  }*/

  return (
    <>
      <div>
        <h1>Anecdotes</h1>
        <Anecdotes/>
      </div>
    </>
  )
}

export default App