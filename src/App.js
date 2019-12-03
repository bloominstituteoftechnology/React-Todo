import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



const ToDoTasks = [
  {
    task: 'Laundry',
    id: 1234,
    completed: false
  },

  {
    task: 'Prepare Dinner',
    id: 1235,
    completed: false
  },

  {
    task: 'Wash dishes',
    id: 1236,
    completed: false
  },
  {
    task: 'Iron Clothes',
    id: 1237,
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

  addToDo = newTodotext => {
    const newTodoList = {
      task: newTodotext,
      id: Date.now(),
      completed: false
    };

    this.setState ({
      todo: [...this.state.todo, newTodoList]
    });
  }

  clearTasks = newTodotext => {
    this.setState ({
      todo: []
    });
  }

  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addToDo ={this.addToDo}/>
        <TodoList todo ={this.state.todo} clearTasks={this.clearTasks}/>
      </div>
      
      
    );
  }
}

export default App;
