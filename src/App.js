import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todoObject: [
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
      ],
    }
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList todoObject={this.state.todoObject} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
