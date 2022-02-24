import React from 'react'

const Part = ({content}) => {
  return (
    <p>{content.part} {content.exercises}</p>
  )
}

export default Part