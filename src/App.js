import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';


const tasks = [
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
      tasks: tasks,
    }

  }

  addTask = newTaskText => {

    const newTask = {
      name: newTaskText,
      id: Date.now(),
      completed: false
    };
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
        <h2>A Todo App!</h2>
        <Todo/>
        </div>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
