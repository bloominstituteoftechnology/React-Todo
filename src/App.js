import React from 'react';
import data from './components/data/data';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data, // same as data: data
      otherData: ""
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
   // Class methods to update state
   toggleItemDone = itemId => {
 //   console.log("bk: index.js: App: toggleItemDone: itemId: ", itemId);
    this.setState({
      data: this.state.d.map(item => {
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
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({ data: [...this.state.data, newItem] });
  };

  clearDone = () => {
   // console.log("bk: index.js: clearDone");
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
