import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
//import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor() {
   super();
   this.state = {
     thingsThatNeedDoin: [
       {task: 'run with dog',
        id: 1234,
        completed: false,
      },
      {task: 'make coffee',
        id: 567,
        completed: false,
      },
      {task: 'learn React',
        id: 89,
        completed: false,
      },
      {task: 'shred gnar',
        id: 0,
        completed: false,
      }
     ]
     }
    };

    addTodo = event => {
      const thingsThatNeedDoin = this.state.thingsThatNeedDoin.push({task: this.state.todo, id: Math.floor(Math.random()*1000000), completed: false})
    };

    render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList TodoList={this.state.thingsThatNeedDoin}/>
      </div>
    );
    };
 }  

export default App;
