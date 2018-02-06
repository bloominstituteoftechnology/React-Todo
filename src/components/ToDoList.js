import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  state = {
    items: [
      {
        id: 1,
        task: 'First Task'
      }, 
      {
        id: 2,
        task: 'Second Task'
      }, 
      {
        id: 3,
        task: 'Third Task'
      }
    ],
    newTask: ''
  }

  addTask = (event) => {
    let updatedItems = this.state.items;
    updatedItems.push(event);
    this.setState({items: updatedItems});
  }

  handleNewTask = (event) => {

  }

  removeTask = () => {
    let newItems = this.state.items;
    this.setState({})
  }

  render() {
    return (
      <div>
      <h3>Test ToDoList</h3>
      <ul>
        {this.state.items.map(item => {
          return (
          <li>
          <ToDo key={item.id} item={item} /><button onClick={this.removeTask}>remove</button>
          </li>
        )})}
      </ul>
      <form onSubmit={this.addTask}>
        <input type ='text' />
      </form>
      </div>
    )
  }
}

export default ToDoList;