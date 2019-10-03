import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import data from './data';

import '../src/components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      shopList: data
    }
  }

  toggleItem = (e, itemId) => {
    e.preventDefault(
      this.setState({
        shopList: this.state.shopList.map(item => {
          if (item.id === itemId) {
            return {
              ...item, 
              done: !item.done
            }
          }
          else {
            return item
          }
        })
      })
    )
  }
// .map loops over an array and returns new items for each index in the array.
// ! is set to be the opposite boolean that it currently is. 

  clearDone = (e) => {
    e.preventDefault()

    this.setState({
      shopList: this.state.shopList.filter(item => {
        return !item.done 
      })
    })
  }

  addTodo = (e, todoName) => {
    const newTodo = {
      id: Date.now(),
      name: todoName,
      done: false
    }
    this.setState({
      shopList: [ ...this.state.shopList, newTodo]
    })
  }

 

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Grocery List</h1> 
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList shopList={this.state.shopList} toggleItem={this.toggleItem} />
          <button className="clear-btn" onClick={this.clearDone}>
            Clear Done Items
          </button>
        </div>
    );
  }
}

export default App;
