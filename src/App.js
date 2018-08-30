import React from 'react';
import DisneyCharacter from './CharacterName';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      inputText: "",
    };
  }
  
  addUser = event => {
    event.preventDefault();
    if(this.state.inputText){
      this.setState({
        users: [...this.state.users, this.state.inputText],
        inputText: ""
      });
    }
  };
  
  handleInput = event => {
    this.setState ({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TodoList users={this.state.users} />
        <TodoForm
          addUser={this.addUser}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;