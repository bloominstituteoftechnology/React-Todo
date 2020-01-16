import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import './App.css';


let toDo = [
  {
    task: 'Go to Doctors appt.',
    id: 1235665321,
    completed: false,
    
  },
  {
    task: 'Fold laundry',
    id: 653211234,
    completed: false,
    
  },
  {
    task: 'Organize closet',
    id: 1528818473621,
    completed: false,
    
  },
  {
    task: 'Wash Dishes',
    id: 1528818498456,
    completed: false,
    
  },
  {
    task: 'Brush fat cat',
    id: 1528819873625,
    completed: false,
    
  }
];

class App extends React.Component {
//If you do a constructor you MUST DO super
  constructor(){
    super();
    this.state = {
      TodoList: toDo, //takes the array we made above (toDo)
      task: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //handlers go in here
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
        <TodoList toDo={this.state.toDo}/>
      </div>
    );
  }
}

export default App;
