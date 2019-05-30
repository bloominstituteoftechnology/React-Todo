import React from 'react';
import Todo from './components/TodoComponents/Todo';

import './components/TodoComponents/Todo.scss';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      newTask: '',
      todoList: [
        {
          task: 'wat',
          id: Date.now(),
          completed: false
        }
      ]
    };
  }

  addTodo = event => {
    event.preventDefault();
    let newTodo = {task: this.state.newTask, id: Date.now(), completed: false};
    this.setState({
      newTask: '',
      todoList: [...this.state.todoList, newTodo]
    });
  }

  handleChanges = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  toggleComplete = (event) => {
    console.log(event);
    // this.setState({completed: true});
  }

  render() {
    return (
      <div>
        <div className='todo-list'>
          {this.state.todoList.map((todo) => (
            <Todo todoInfo={todo} key={todo.id} onClick={this.toggleComplete} /*onClick={this.toggleComplete}*/ className={todo.completed ? 'todo-complete' : 'todo-incomplete'} />
          ))}
        </div>

        <form onSubmit={this.addTodo} className='todo-form'>
          <input placeholder='Task' value={this.state.newTask} onChange={this.handleChanges} />
          <button>hi</button>
        </form>
      </div>
    )
  }
  /*
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
  */
}

export default App;
