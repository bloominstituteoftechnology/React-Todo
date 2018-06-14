import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: 'Test',
          id: Date.now(),
          completed: false
        },
      ],
    };
  }

  // addTodo = props => {
  //   props.preventDefault();
  //   const task = this.state.todos.slice();
  //   task.push({task: this.state.toDos, id: Date.now(), completed: false});
  //   this.setState({Tasks: task});
  //   this.setState({task, task: ''});
  // }

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoList tasks="this.state.tasks" />
        <TodoForm />
      </div>
    );
  }
}

export default App;

// Github Pull Request:
// https://github.com/LambdaSchool/React-Todo/pull/288