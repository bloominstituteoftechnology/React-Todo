import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
// import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listArray: [],
    };
  }

  addListItem = newItem => {
    this.setState({ listArray: [...this.state.listArray, newItem] })
  }

  clearAllItems() {
    this.setState({
      emptyArray: []
    })
  }

  render() {
    const {listArray} = this.state
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>Here's my to-do list</h1>
          <TodoList todoList={listArray}>{listArray}</TodoList> 
          <TodoForm addListItem={this.addListItem}/>
        </div>
      </div>
     
    )
  }
}

export default App;
