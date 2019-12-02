import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ''
    }
  }

  handleAdd = (input) => {
    const newItem = {
      todo: input,
      id: Date.now(),
      complete: false,
    }
    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  handleChange = (id) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === id) {
          return {...item, complete: !item.complete}
        } else {
          return item
        }
      })
    })
  }

  handleRemove = () => {
    this.setState({
      list: this.state.list.filter(item => !item.complete)
    })
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h2>My Todo App!</h2>
        <TodoList list={this.state.list} handleChange={this.handleChange} />
        <TodoForm handleAdd={this.handleAdd} />
        <button onClick={() => {this.handleRemove()}}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
