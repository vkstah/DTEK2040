import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

import Form from './components/Form';
import Person from './components/Person';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '040-123456'
        }
      ]
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({
          persons: response.data
        })
    })
  }

  addPerson = (event, newName, newNumber) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    // If a match is found simply return.
    if (this.state.persons.findIndex(person => person.name === personObject.name) !== -1) return

    const persons = this.state.persons.concat(personObject)
    this.setState({
      persons: persons
    })
  }

  render() {
    return (
      <div>

        <h2>Puhelinluettelo</h2>
        <Form handleSubmit={(event, newName, newNumber) => this.addPerson(event, newName, newNumber)} />

        <h2>Numerot</h2>
        {this.state.persons.map((person) => {
          return <Person person={person} key={person.name} />
        })}

      </div>
    )
  }

}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)