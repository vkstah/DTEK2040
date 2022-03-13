import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '040-123456'
        }
      ],
      newName: '',
      newNumber: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    // If a match is found simply return.
    if (this.state.persons.findIndex(person => person.name === personObject.name) !== -1) return

    const persons = this.state.persons.concat(personObject)
    this.setState({
      persons: persons,
      newName: '',
      newNubmer : ''
    })
  }

  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value
    })
  }

  handleNumberChange = (event) => {
    this.setState({
      newNumber: event.target.value
    })
  }

  render() {
    return (
      <div>

        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            <div>
              <span>Nimi: </span>
              <input
                value={this.state.newName}
                onChange={this.handleNameChange}
              />
            </div>
            <br />
            <div>
              <span>Numero: </span>
              <input
                value={this.state.newNumber}
                onChange={this.handleNumberChange}
              />
            </div>
          </div>
          <br />
          <div>
            <button type="submit">Lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>
        {this.state.persons.map((person) => {
          return <div key={person.name}>
            {person.name}: {person.number}
          </div>
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