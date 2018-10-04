import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoData:  [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'do the dishes',
          id: 1528814674367,
          completed: false
        },
        {
          task: 'Get da Drinks',
          id: 152881445367,
          completed: false
        }
      ],
      todo:''
    }; 
  }
  strikeThru = id => {
    let newTodo = this.state.todoData.slice();
    newTodo = newTodo.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ newTodo });
  };
  addTodo = event => {
      event.preventDefault();
      if (this.state.todo === '') {
        return;
      } else {
      this.setState({
          todoData: [
            ...this.state.todoData,
            { task: this.state.todo, completed: false, id: Date.now() }
          ],
          todo: ''
        })}
    };

    changeTodo = event => this.setState({ [event.target.name]: event.target.value });


  removeCompleteTodo = event => {
    event.preventDefault();
    let newTodo = this.state.todoData.slice();
    newTodo = newTodo.filter(todo => !todo.completed);
    this.setState({ newTodo });
    console.log(newTodo)
  };

    render() {
    return (
      <div className='container'>
        <h1 className='main-header'>TODO LIST</h1>
        <TodoList 
        data={this.state.todoData}
        strikeThru={this.strikeThru}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          AddTodoHandler={this.addTodo}
          removeCompleted={this.removeCompleteTodo}
          />
      </div>
    );
  }
}

export default App;
