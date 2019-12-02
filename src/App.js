import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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

  constructor(){

    super();
    this.state = {
      todos: todos,
    }
  }

  addTodo = newTask => {
    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todos: [...todos, newTodo]
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList
        todos = {this.state.todos}
        addTodo = {this.addTodo}
        />
      </div>
    );
  }
}

export default App;
