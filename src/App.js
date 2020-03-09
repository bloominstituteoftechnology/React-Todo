import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    done: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super(); 
    this.state = {
      data, 
      task: ''
    };
  }

  clearTasks = data.filter(function (e) {
    return e.done == true;
  })

 

  toggleDone = clickedItemId => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === clickedItemId) {
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

  addItem = itemName => {
    // add a new item to the data state
    const newItem = {
      name: itemName,
      id: new Date(),
      done: false
    };
    this.setState({
      data: [...this.state.data, newItem]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          data={this.state.data}
          toggleDone={this.toggleDone}
        />
      </div>
    );
  }
}

export default App;
