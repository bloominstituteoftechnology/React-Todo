import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';



const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      things: data
    };
  }

  addThings = name => {
    const newThings = {
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      things: [...this.state.things, newThings]
    });
  };

  filterCompleted = () => { };

  toggleCompleted = id => {
    this.setState({
      things: this.state.things.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });

    // .map, .filter, .reduce, .forEach
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Things Todo</h1>
          <TodoForm addThings={this.addThings} />
        </div>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          things={this.state.things}
        />
      </div>
    );
  }
}

export default App;
