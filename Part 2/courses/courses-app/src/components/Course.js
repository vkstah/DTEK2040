import React from 'react'

import Header from './Header'
import Part from './Part'

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      {course.parts.map(part => <Part key={part.name} part={part} />)}
    </>
  )
}

export default Course