import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js';

let testArr = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      "todoList": testArr,
      "todoInput": ''
    }
  }

  handleChange (event) {
    this.setState({
      'todoInput': event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todoList} />
        <TodoForm value={this.state.todoInput} />
      </div>
    );
  }
}

export default App;
