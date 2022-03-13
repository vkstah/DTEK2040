import React from 'react'

import Part from './Part'

const Course = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map(part => <Part key={part.name} part={part} />)}
    </>
  )
}

export default Course