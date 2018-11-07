import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const dummyData = [
  {todo: 'Learn React'},
  {todo: 'Make Cool Websites'},
  {todo: 'Watch Cartoon'},
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: dummyData,
      inputText: '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addTodo(e) {
    e.preventDefault();

    this.setState({
      todoList: [...this.state.todoList, {'todo': this.state.inputText}],
      inputText: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList}/>
        <TodoForm
          inputText= {this.state.inputText}
          handleChange={ e => this.handleChange(e) }
          addTodo={ e => this.addTodo(e) }
        />
      </div>
    );
  }
}

export default App;
