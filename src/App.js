import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: []
    };
  }

  addItem = name => {
    const newItem = {
      name: name,
      id: Date.now(),
      done: false,
      display: true
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };


  toggleDone= id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };

  deleteItem= () => {
    const array = [...this.state.todo]
    const getRidOf = array.filter(item => {
      return item.done === false
      })
      this.setState({todo: getRidOf})
  };

  render() {
    return (
      <div className = "container">
        <div>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleDone={this.toggleDone}
          todo={this.state.todo}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
