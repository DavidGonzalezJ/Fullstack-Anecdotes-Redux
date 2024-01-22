import axios from "axios"

const baseUrl = 'http://localhost:3002/anecdotes'

const getAll = async() => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getById = async(id) => {
    const response = await axios.get(baseUrl + '/' + id)
    return response.data
}

const addAnecdote = async(content) => {
    const newAnecdote = {
        content: content,
        votes: 0
    }
    const response = await axios.post(baseUrl,newAnecdote)
    return response.data
}

const vote = async(id) => {
    const anec = await getById(id)
    const updatedAnec = { ...anec, votes: anec.votes + 1}
    const response = await axios.put(baseUrl + '/' + id, updatedAnec)
    return response.data
}

export default { getAll, addAnecdote, vote }