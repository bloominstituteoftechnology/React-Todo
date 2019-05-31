import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';




const todo = [
  {
    task: 'Organize Garage',
    id: 113,
    completed: false
  },
  {
    task: 'Make Lemonade',
    id: 114,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }

  addItem = item => {
    let newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    // const sorted = [...this.state.todo, newItem].sort(function(a,b) {
    //   let nameA = a.name.toUpperCase();
    //   let nameB = b.name.toUpperCase();

    //   return nameA > nameB ? 1 : -1;
    // });
    //this.setState({ todo: sorted });
    this.setState({todo: [...this.state.todo, newItem]});
  };

  toggleItem = id => {
    let todo = this.state.todo.slice();
    todo = todo.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;

        return item;
      } else {
        return item;
      }
    });
    this.setState({ todo });
  };

  clearComplete = id => {
    const filtered = this.state.todo.filter(item => {
      return item.completed === false;
    });
    this.setState({ todo: filtered });
  };

  render() {

    return (
      <div className='App'>
        <div className='header'>
          <h1>ToDo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
         />
        <div>
          <button onclick={this.clearComplete} className='clear-btn'>
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}

export default App;
