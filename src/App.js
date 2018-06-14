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
      toDos: [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
      ],
    };
    todo:"";
  }

  // addTodo = props => {
  //   props.preventDefault();
  //   const toDos = this.state.todos.slice();
  //   toDos.push({task: this.state.toDos, completed: false, id: Date.now()});
  //   this.setState({toDos: toDos});
  //   this.setState({toDos, todo: ''});
  // }

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;

// Github Pull Request:
// https://github.com/LambdaSchool/React-Todo/pull/288