import React from 'react';
import Todo from './components/TodoComponents/Todo'
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

  render() {
    const {listArray} = this.state
    return (
      <div>
        <h1>Here's my to-do list</h1>
        <Todo todoList={listArray} />
        <TodoForm addListItem={this.addListItem}/>
      </div>
     
    )
  }
}

export default App;
