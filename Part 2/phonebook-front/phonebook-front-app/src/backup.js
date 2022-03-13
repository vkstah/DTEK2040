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
            <Button />
          </div>
        </form>