import React, { useEffect, useState } from 'react'

const Total = ({parts}) => {
  const [ count, setCount ] = useState(null)

  useEffect(() => {
    let exerciseCount = 0
    parts.forEach(part => {
      exerciseCount += part.exercises
    })
    setCount(exerciseCount)
  }, [parts])

  return (
    <p>
        Total {count} exercises
    </p>
  )
}

export default Total