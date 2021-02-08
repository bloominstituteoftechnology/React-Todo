import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm';

const initialListItems = [
  {
    task: 'Clean kitty litter box',
    id: 0,
    completed: false,
  },
  {
    task: 'Eat some good lunch after class',
    id: 1,
    completed: false
  },
  {
    task: 'Complete homework',
    id: 2,
    completed: false
  },
  {
    task: 'Complain about Homework',
    id: 3,
    completed: false
  },
  {
    task: 'WATCH a podcast',
    id: 4,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: initialListItems
    }
  }

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

  clearCompleted = () => {
    const newItems = this.state.listItems.filter(item=> {
      return !item.completed;
    })
    this.setState({
      listItems: newItems
    })
  }

  deleteItem = (itemId) => {
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
