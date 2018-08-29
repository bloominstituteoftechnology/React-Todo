import React from 'react';
// import ReactDom from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

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
// ReactDom.render(<app />, rootElement);