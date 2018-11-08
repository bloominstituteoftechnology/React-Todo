import React from 'react';
import './App.css'

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearchBox from './components/TodoComponents/TodoSearchBox';

// const dummyData = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: JSON.parse(localStorage.getItem('yk-todoApp')) || [],
      inputText: '',
      filterText: '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e, el, i) {
    const newTodos = [...this.state.todoList];
    newTodos[i].completed = !newTodos[i].completed;

    this.setState(newTodos);
  }

  addTodo(e) {
    e.preventDefault();

    if (this.state.inputText !== '') {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            'task': this.state.inputText,
            id: this.state.inputText,
            completed: false
          }
        ],
        inputText: '',
      });
    }

  }

  removeCompleted(e) {
    e.preventDefault();

    const newTodos = [...this.state.todoList].filter(todo => !todo.completed);

    this.setState({todoList: newTodos});
  }

  componentDidUpdate(prevProps, prevState) {
    if (localStorage.getItem('yk-todoApp') !== JSON.stringify(this.state.todoList)) {
      localStorage.setItem('yk-todoApp', JSON.stringify(this.state.todoList))
    }
  }

  render() {
    return (
      <div className="todoApp">
        <h2>Welcome to your Todo App!</h2>
        <div className="todo--card">
          <TodoSearchBox
            filterText={this.state.filterText}
            handleChange={ e => this.handleChange(e) }
          />
          <TodoList
            todoList={this.state.todoList}
            handleClick={ (e, el, i) => this.handleClick(e, el, i)  }
            filterText={this.state.filterText}/>
          <TodoForm
            inputText= {this.state.inputText}
            handleChange={ e => this.handleChange(e) }
            removeCompleted={ e => this.removeCompleted(e) }
            addTodo={ e => this.addTodo(e) }
          />
        </div>
      </div>
    );
  }
}

export default App;