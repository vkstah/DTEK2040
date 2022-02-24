import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Contents from './components/Contents'
import Total from './components/Total'

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12
  const contentsArray = [
    {
      part: part1,
      exercises: exercises1
    },
    {
      part: part2,
      exercises: exercises2
    },
    {
      part: part3,
      exercises: exercises3
    }
  ]
  const totalExercises = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Contents contents={contentsArray} />
      <Total total={totalExercises} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)