import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './Todo.css';


const toDoData = [
  {task: 'Wash Dishes',
   id: 12345,
   completed: false   
  },
  {
    task: 'Jog',
    id: 12396,
    completed: false
  },
  {
    task: 'Walk the Dog',
    id: 12386,
    completed: false
  }
]

console.log(toDoData);
export default class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = { 
        toDoData
      }
    }
    toggleItem = (event,itemId) => {
      this.setState({
        toDoData: this.state.toDoData.map(item =>{
          if (itemId === item.id){
            return {
              ...item, completed: !item.completed
            }
          }
          return item;
        })
      })
    }
    
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDoData = {this.state.toDoData} toggleItem={this.toggleItem}/>
        <TodoForm/>
      </div>
    );
  }
}


