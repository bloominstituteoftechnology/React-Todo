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
     thingsThatNeedDoin: [  
       {task: 'run with dog',   //shouldnt these be showing up already? 
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
     ],
     todo: ""
     }
    };

    addTodo = event => {
      event.preventDefault();
      const thingsThatNeedDoin = this.state.thingsThatNeedDoin.slice();
      thingsThatNeedDoin.push({
        task: this.state.todo, 
        id: Date.now(),  //Math.floor(Math.random()*1000000)
        completed: false
      });
      this.setState({ thingsThatNeedDoin: thingsThatNeedDoin });
    };

    handleInputChange = event => {
      this.setState({ todo: event.target.value });
      //update state. only way to update state object. new copy of state. original replaced by new version we push inside of it. shallow merging.
    };

    toggleCompleted = () => {
      thingsThatNeedDoin.map(task => {
        thingsThatNeedDoin.completed ? true : false;
    });
    this.setState({ });
    };

    clearCompleted = event => {
      event.preventDefault();
      thingsThatNeedDoin.filter(donesky => !thingsThatNeedDoin.completed);
      this.setState({ });
    };

    render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.thingsThatNeedDoin} />
        <TodoForm addTodo={this.addTodo} inputChange={this.handleInputChange} value={this.state.todo} />
      </div>
    );
    };
 }  

export default App;
