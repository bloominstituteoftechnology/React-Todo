import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        task: 'Organize Garage',
        id: 1,
        completed: false
      },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        }],
      id: 0,
      todoItem: ''
    };
  }
  onChange = event => {
    this.setState({[event.target.name] : event.target.value});
  };
  addTodo = event => {
    event.preventDefault();

    const todoList = this.state.todos,
      id = this.state.id + 1;

    todoList.push({
      task: this.state.todoItem,
      id: id,
      completed: false
    });

    this.setState({todos: todoList, id: id, todoItem: ''});
  };
  render() {
    return (
      <div>
        <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoList;