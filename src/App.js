import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDo from './components/TodoComponents/Todo';



const ToDoTasks = [
  {
    task: 'Laundry',
    id: Date.now(),
    completed: false
  },

  {
    task: 'Prepare Dinner',
    id: Date.now(),
    completed: false
  },

  {
    task: 'Wash dishes',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Iron Clothes',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      todo: ToDoTasks,
      nextOne: ''
    };
  }

  addToDo = newTodotext=> {
    const newTodoList = {
      task: newTodotext,
      id: Date.now(),
      completed: false
    };

    this.setState ({
      groceries: [...this.state.todo, newTodoList]
    });
  }
  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addtask ={this.addtask}/>
      </div>
      

    );
  }
}

export default App;
