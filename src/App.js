import React from 'react';


import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {task: 'Get Groceries',
   id: 1528817077286,
   complete: false
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos, 
      newTodoText: ""
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
          complete: false
        }
      ],
      newTodoText: ""
    });
  };


  clearComplete = ev => {
    ev.preventDefault();
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.complete === false
      )
    });
  };

  toggleComplete = index => {
    this.setState({
      todos: this.state.todos.map((todo, idx) => {
        if (index !== idx) {
          return todo;
        } else {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
      })
    })
  }

  render() {
    return (
      <div className = 'app'>
        <h1>To-Do List For Today!</h1>
        <TodoList 
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}
        complete={this.state.complete}
        />
        <TodoForm
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
          newTodoText={this.state.newTodoText}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;