import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm';

const initialListItems = [
  {
    task: 'Click me to mark complete',
    id: 0,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      listItems: initialListItems
    }
  }
  
  //handler to mark items completed
  toggleCompleted = (itemId) => {
    this.setState({
      listItems: this.state.listItems.map(item=>{
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return(item);
      })
    });
  }

  //handler to add items to list
  handleItemAdd = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    
    const newItems = [ ...this.state.listItems, newItem];

    this.setState({
      listItems: newItems
    })
  }

  //delete all completed items
  clearCompleted = () => {
    const newItems = this.state.listItems.filter(item=> {
      return !item.completed;
    })
    this.setState({
      listItems: newItems
    })
  }

  //individual delete item button
  deleteItem = (itemId) => {
    // const keptItems = this.state.listItems.filter(item => {
    //   return itemId !== item.id;
    // })
    // console.log(keptItems);
    // this.setState({
    //   listItems: keptItems
    // })
    this.setState({
      listItems: this.state.listItems.filter(i => itemId !== i.id)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>To-Do List</h1>
        </div>
        <TodoList items={this.state.listItems} toggleCompleted={this.toggleCompleted} deleteItem={this.deleteItem}/>
        <TodoForm handleItemAdd={this.handleItemAdd} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
