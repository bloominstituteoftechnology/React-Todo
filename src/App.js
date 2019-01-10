import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

const todos = [
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
    this.state = {
      todos, // same as todos: todos,
      newTodoText: ''
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.newTodoText,
          id: Date.now(),
          completed: false
        }
      ],
      newTodoText: ''
    });
  };

  render() {
    return (
      <div className='main-container'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        todos={this.state.todos}
        />
  <TodoForm
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
          newTodoText={this.state.newTodoText}
        />
      </div>
    );
  }
}

export default App;