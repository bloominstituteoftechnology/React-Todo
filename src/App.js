import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [],
      inputText: '',
    };
  }

  addTodo(event) {
    //this function updates the Todo list
    event.preventDefault();
  }

  handleInput = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }
  //clickHandler

  render() {
    return (
      <div>

        <TodoList items={this.state.items} />
        <TodoForm
        addTodo={this.addTodo} inputText={this.state.inputText}
        handleInput={this.handleInput}
        />

      </div>
    );
  }
}

export default App;
