import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todoListSeed = [
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
  constructor() {
    super();
    this.state = {
      todoList: todoListSeed,
      inputText: '',
      id: Date.now(),
      completed: false
    }
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        { task: this.state.inputText}
      ],
      inputText: ''
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {/* {console.log(this.state)} */}
        <TodoList 
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
