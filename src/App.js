import React, { Component } from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';

const todos = [
  {
      task: 'Get ready for work',
      id: 600,
      completed: false
  },
  {
      task: 'Leave for work',
      id: 700,
      completed: false
  },
  {
      task: 'Begin work',
      id: 800,
      completed: false
  },
  {
      task: 'Lunch break',
      id: 1200,
      completed: false
  },
  {
      task: 'Return from break',
      id: 1300,
      completed: false
  },
  {
      task: 'Leave work',
      id: 1700,
      completed: false
  },
  {
      task: 'Arrive home',
      id: 1800,
      completed: false
  },
  {
      task: 'Eat dinner',
      id: 1830,
      completed: false
  },
  {
      task: 'Study React',
      id: 1900,
      completed: false
  },
  {
      task: 'Class Time',
      id: 2000,
      completed: false
  },
  {
      task: 'Bedtime',
      id: 2330,
      completed: false
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.task,
          id: this.state.id
        }
      ]
    });
};

  render() {
    return (
      <div>
        <h1>To Do List</h1>

        <TodoList
          todos={this.state.todos}
        />

        <TodoForm
          addTodo={this.addTodo}
        />
      </div>
    );
  };
}

export default App;
