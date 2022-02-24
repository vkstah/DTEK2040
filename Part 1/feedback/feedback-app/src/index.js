import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Title from './components/Title'
import Button from './components/Button'
import Statistics from './components/Statistics'
import Statistic from './components/Statistic'

const App = () => {
  const [ goodCount, setGoodCount ] = useState(0)
  const [ neutralCount, setNeutralCount ] = useState(0)
  const [ negativeCount, setNegativeCount ] = useState(0)

  const handleGoodClick = () => {
    setGoodCount(goodCount + 1)
  }

  const handleNeutralClick = () => {
    setNeutralCount(neutralCount + 1)
  }

  const handleNegativeClick = () => {
    setNegativeCount(negativeCount + 1)
  }

  return (
    <div>
      
      <Title>Give us feedback!</Title>
      <Button handleClick={handleGoodClick}>Good</Button>
      <Button handleClick={handleNeutralClick}>Neutral</Button>
      <Button handleClick={handleNegativeClick}>Negative</Button>

      <Title>Feedback statistics</Title>
      {goodCount + neutralCount + negativeCount === 0
      ? <p>No feedback given yet</p>
      :
      <Statistics>
        <Statistic text={"Good:"} data={goodCount} />
        <Statistic text={"Neutral:"} data={neutralCount} />
        <Statistic text={"Negative:"} data={negativeCount} />
        <Statistic text={"Average:"} data={((goodCount - negativeCount) / (goodCount + neutralCount + negativeCount)).toFixed(1)} />
        <Statistic text={"Percentage of positive:"} data={Math.floor(goodCount / (goodCount + neutralCount + negativeCount) * 100) + " %"} />
      </Statistics>
      }

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)