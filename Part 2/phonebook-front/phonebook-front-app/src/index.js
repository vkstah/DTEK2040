import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas'
        }
      ],
      newName: ''
    }
  }

  addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName
    }
    const persons = this.state.persons.concat(personObject)
    this.setState({
      persons: persons,
      newName: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value
    })
  }

  render() {
    return (
      <div>

        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNumber}>
          <div>
            <span>Nimi: </span>
            <input 
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <button type="submit">Lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>
        {this.state.persons.map((person) => {
          return <h3 key={person.name}>{person.name}</h3>
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