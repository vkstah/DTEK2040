import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

import Form from './components/Form';
import Person from './components/Person';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: []
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

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        this.setState({
          persons: this.state.persons.concat(response.data)
        })
      })
  }

  removePerson = (event, id) => {
    event.preventDefault()

    // Popup asking whether the user actually wants to remove the entry.
    // window.confirm: OK = true, Cancel = false
    if (window.confirm("Haluatko varmasti poistaa tämän numeron?") === false) return

    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(response => {
        this.setState({
          persons: this.state.persons.filter(person => person.id !== id)
        })
      })
  }

  render() {
    return (
      <div>

        <h2>Puhelinluettelo</h2>
        <Form
          handleSubmit={(event, newName, newNumber) => this.addPerson(event, newName, newNumber)}
        />

        <h2>Numerot</h2>
        {this.state.persons.map((person) => {
          return <Person person={person} handleRemove={(event, id) => this.removePerson(event, id)} key={person.name} />
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