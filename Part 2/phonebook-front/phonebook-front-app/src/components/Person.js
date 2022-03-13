import React from 'react'

const Person = ({person, handleRemove}) => {
  return (
    <div>
      {person.name}: {person.number}
      <button onClick={(event) => handleRemove(event, person.id)}>Poista</button>
    </div>
  )
}

export default Person