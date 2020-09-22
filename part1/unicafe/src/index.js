import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => <h1>give feedback</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good,neutral,bad}) => {

  const all = good+neutral+bad

  return (
    <div>
      <h1>statistics</h1>
      {
        all 
        ? <table>
            <tbody>
              <Statistic text="good" value={good} />
              <Statistic text="neutral" value={neutral} />
              <Statistic text="bad" value={bad} />
              <Statistic text="all" value={good+bad+neutral} />
              <Statistic text="average" value={ all ? (good-bad) / all : ': no feedback ginve' } />
              <Statistic text="positive" value={ all ? (good/all) * 100 + '%' : ': no feeback given' } />
            </tbody>
          </table>
        : <p>No feedback given</p>

      }
    </div>
  );
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
  }


  return (
    <div>
      <Header />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)