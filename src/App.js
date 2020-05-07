import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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
      data, // same as data: data
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
   // Class methods to update state
   toggleItemDone = itemId => {
   // console.log("bk: index.js: App: toggleItemDone: itemId: ", itemId);
    this.setState({
      data: this.state.data.map(item => {
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

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({ data: [...this.state.data, newItem] });
  };

  clearDone = () => {
    console.log("bk: index.js: clearDone");
    this.setState({
      data: [
        ...this.state.data.filter(item => {
          return !item.completed;
        })
      ]
    });
  };

  render() {
    return (
      <div className="App">
          <div className="header">
          <h2>ToDo List</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItemDone={this.toggleItemDone}
          data={this.state.data}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
