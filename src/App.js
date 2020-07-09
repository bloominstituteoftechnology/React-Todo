import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const task = [
  {
    name: 'Learn HTML',
    id: 123,
    purchased: false
  },
  {
    name: 'Learn CSS',
    id: 124,
    purchased: false
  },
  {
    name: 'Learn JavaScript',
    id: 125,
    purchased: false
  },
  {
    name: 'Learn Redux',
    id: 126,
    purchased: false
  },
  {
    name: 'Learn SQL',
    id: 127,
    purchased: false
  },
  {
    name: 'Learn everything else',
    id: 128,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task 
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      task: [...this.state.task, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
    this.setState({
      task: this.state.task.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    // if item is purchased (item.purchased is true) then filter out
    this.setState({
      task: this.state.task.filter(item => !item.completed)
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List: MVP</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          task={this.state.task}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  };
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
