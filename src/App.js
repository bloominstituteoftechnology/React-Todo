import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import './components/Todo.css'


const list = [{
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
},
{
  task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
},
{ 
  task: 'Finish Homework',
  id: 1528817085746,
  completed: false
},
];



class App extends React.Component {
  constructor(){
    super();
    this.state ={
      list: list
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>TO DO LIST BELOW!</h2>
        <TodoForm />
        <TodoList list={list} />
      </div>
    );
  }
}

export default App;
