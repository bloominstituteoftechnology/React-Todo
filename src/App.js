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
  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoData: [
        ...this.state.todoData,
        { task: this.state.todo, completed: false, id: Date.now() }
      ],
      todo: ''
    });
  };

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className='container'>
        <h1 className='main-header'>TODO LIST</h1>
        <TodoList data={this.state.todoData}/>
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          AddTodoHandler={this.addTodo}/>
      </div>
    );
  }
}

export default App;
