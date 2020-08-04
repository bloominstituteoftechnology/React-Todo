import React from 'react';
import ReactDOM from "react-dom";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todo = [
  {
    task: '',
    id: 1528817077286,
    completed: false
  },
  {
    task: '',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  toggleItem = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearTodo = itemName => {
    const clearItems = {
      task: '',
      id: new Date(),
      completed: true
    };

    this.setState({
      todo: [clearItems]
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 onClick={() => this.setState({})}>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
