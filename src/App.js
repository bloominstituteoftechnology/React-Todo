import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: [{task: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diameget risus varius blandit.', status: false},
      {task: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diameget risus varius blandit.', status: false},
      {task: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diameget risus varius blandit.', status: false}]
    }
  }

  addTodo = (todo) => {
    console.log(todo);
    console.log(this.state.tasks);
    this.setState(state => {
      const tasks = [...state.tasks, todo];

      return {
        tasks
      }
    })
  };

  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
