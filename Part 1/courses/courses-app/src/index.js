import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Contents from './components/Contents'
import Total from './components/Total'

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Contents parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)