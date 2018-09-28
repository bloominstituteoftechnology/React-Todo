import React, { Component } from 'react';
import ReactDOM from 'react';
import Header from './components/HeaderComponents/Header';
import ToDoList from './components/ToDoItemComponents/ToDoList';
import ToDoItem from './components/ToDoItemComponents/ToDoItem';

// HINTS
// USE .filter to remove todos completed

class App extends Component {
  // no other module should have state
  state = {
    toDoItems: [
      {
        toDoTitle: 'Organize garage',
        todoId: 123456,
        toDoContent: 'Get the garage right',
        completed: false,
      },
      {
        toDoTitle: 'Clear out empty boxes',
        todoId: 567890,
        toDoContent: 'Break down and remove all non-reuseable boxes.',
        completed: false,
      },
    ],
  };

  handleClick = todoId => {
    // what to do with the todoId?
    alert(todoId);
  };

  handleAddTask = () => {
    if (!this.state.toDoTitle) {
      alert('No task!');
    } else {
      this.setState({
        toDoTitle: '',

        toDoItems: [
          {
            task: this.state.toDoTitle,

            todoId: Date.now(),

            completed: false,
          },

          ...this.state.toDoItems,
        ],
      });
    }
    console.log(this.state.toDoItems);
  };
  render() {
    return (
      <div>
        <h1>D2rd's Stuff ToDo</h1>
        <Header />
        <h2>Current ToDo Items</h2>
        {this.state.toDoItems.map((item, i) => {
          return (
            <ToDoList
              item={item.toDoTitle}
              content={item.toDoContent}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

//ToDoList
import React, { Component } from 'react';
import './ToDoItem';
import './ToDoList.css';

const ToDoList = props => {
  return (
    <div>
      <ul>
        <li>{props.item}</li>
        <p>{props.content}</p>
      </ul>
    </div>
  );
};

export default ToDoList;