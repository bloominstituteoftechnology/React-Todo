import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import TrashButton from './components/ButtonComponents/TrashButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
      ],
      item: '',
    };
  }

  toggleCompletion = (event, id) => {
    const items = this.state.items.slice();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].completed = !items[i].completed;
        event.target.classList.toggle('task--complete');
        break;
      }
    }
    this.setState({ items: items });
  } //toggleCompletion

  clearCompleted = () => {
    let items = this.state.items.slice();
    items = items.filter(item => {
      if (item.completed === true) {
        console.log(item);
        return false;
      }
      return true;
    });

    this.setState({ items });
  } //clearCompleted

  clearAll = () => {
    if(this.state.items.length === 0) {
      return;
    }
    if(window.confirm('Are you sure you want to delete everything?')) {
    this.setState({ items: [] })
    }
  } //clearAll

  todoChange = event => {
    this.setState({ item: event.target.value })
  } //todoChange
  addToDo = event => {
    if (this.state.item.length === 0) {
      return;
    }
    const items = this.state.items.slice();
    items.push({ task: this.state.item, id: Date.now(), completed: false });
    this.setState({ items: items, item: '' });
  } //addToDo


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "todo-container">
        <TodoList completeHandler={this.toggleCompletion} items={this.state.items} />
        <TodoForm
          value={this.state.item}
          changeTodoHandler={this.todoChange}
          addTodoHandler={this.addToDo}
          clearCompletedHandler={this.clearCompleted}
          clearAllHandler = {this.clearAll}
        />
      </div>
    );
  }
}

export default App;
