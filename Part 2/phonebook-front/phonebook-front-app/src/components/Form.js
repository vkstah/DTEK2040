import React, { useState } from 'react'

import Button from './Button'

const Form = ({handleSubmit}) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={(event) => handleSubmit(event, newName, newNumber)}>
      <div>
        <div>
          <span>Nimi: </span>
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <br />
        <div>
          <span>Numero: </span>
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
      </div>
      <br />
      <div>
        <Button />
      </div>
    </form>
  )
}

export default Form