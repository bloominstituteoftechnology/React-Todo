import React from 'react';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import './styles.css'

const toDoItems = [
  {
    name: 'Buy Groceries',
    id: 123,
    completed: false
  },
  {
    name: 'Clean Room',
    id: 124,
    completed: false
  },
  {
    name: 'Call Dad',
    id: 1235,
    completed: false
  },
  {
    name: 'Home Work',
    id: 1246,
    completed: false
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDoItems: [...this.state.toDoItems, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
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

  clearcompleted = e => {
    e.preventDefault();
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => !item.completed)
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <ToDoForm addItem={this.addItem} />
        </div>
        <ToDoList
          toDoItems={this.state.toDoItems}
          toggleItem={this.toggleItem}
          clearcompleted={this.clearcompleted}
        />
      </div>
    );
  }
}


export default App