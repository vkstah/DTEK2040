import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Contents from './components/Contents'
import Total from './components/Total'

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }
  const totalExercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Contents contents={[part1, part2, part3]} />
      <Total total={totalExercises} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)