import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVote = ({anecdotes,votes}) => {
  const mostVote = Math.max.apply(null, votes)
  const index = votes.indexOf(mostVote)
  return (
    <div>
      <h1>Anecdote with Most Votes</h1>
      {
        mostVote === 0
        ? <p>No votes given</p>
        : <>
            <p>{anecdotes[index]}</p>
            <p>has {votes[index]} votes</p>
          </>
      }
    </div>
  )
}

const App = (props) => {

  const anecdoteLen = props.anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdoteLen).fill(0))

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random()*anecdoteLen))
  }

  const handleVoteClick = (selected) => () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick(selected)}>vote</button>
      <button onClick={handleNextClick} selected={selected}>next anecdote</button>

      <MostVote anecdotes={props.anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)