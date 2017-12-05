import React, { Component } from 'react';
import Todo from '../Todo/Todo';

/*CSS Styles */
import './TodoList.css';

class TodoList extends Component {
   componentDidMount() {
     if (localStorage.getItem('todo')) {
       const storage = localStorage.todo.split(',');
       this.setState({ todos: storage});
     }
   }
  
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleTodoInput = event => {
  
    this.setState({ newTodo: event.target.value });

  };



  addTodo = event => {
    
    event.preventDefault();
    const todoList = this.state.todos;
    if (this.state.newTodo === '' ) return;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
    localStorage.setItem('todo', this.state.todos);
  };

  removeTodo = (index) => {
    const todoList = this.state.todos;
    todoList.splice(index,1);
    this.setState({
      todos: todoList
    });
   localStorage.todo = todoList;
  }

  render() {
    return (
      <div>
        
        {this.state.todos.map((todo, i) => <Todo key={i} index={i} todo={todo}  remove={this.removeTodo.bind(this)} />)}
        <form onSubmit={this.addTodo}>
          <input className="input"
            onChange={this.handleTodoInput}
            placeholder="Add a new todo"
            value={this.state.newTodo}
          />
          
        </form>
      </div>
    );
  }
}

export default TodoList;
