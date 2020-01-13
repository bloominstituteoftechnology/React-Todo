import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: []
    }
  }

  addTodoItem = (itemDescription) => {
    if (this.state.todoItems.find(e => (e.description === itemDescription)) !== undefined) {
      return;
    }
    this.setState({
      todoItems: [...this.state.todoItems, {
        id: uuidv4(),
        description: itemDescription,
        isCompleted: false}]
    });
    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }

  completeItemById = (itemId) => {
    this.setState({
      todoItems: this.state.todoItems.map(e => {
        if (e.id === itemId) {
          return {
            ...e,
            isCompleted: true
          };
        } else {
          return e;
        }
      })
    })
  }

  clearAllCompletedItems = () => {
    console.log('Clearing all items')
    this.setState({
      todoItems: this.state.todoItems.filter(e => !(e.isCompleted))
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your To Do App!</h2>
        <TodoList 
          todoItems={this.state.todoItems}
          completeItemById={this.completeItemById} 
        />
        <TodoForm
          addTodoItem={this.addTodoItem}
          clearAllCompletedItems={this.clearAllCompletedItems}
        />
      </div>
    );
  }
}

export default App;
