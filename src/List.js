import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    const todos = JSON.parse(localStorage.getItem("todos"));
    this.state = {
      todos: todos || [],
      newTodo: {text: "", isCompleted: false}
    };
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeItems = this.removeItems.bind(this);
  }

  addTodo(event) {
    event.preventDefault();            
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({todos: todos,
          newTodo: {text: '', isCompleted: false}});
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  handleNewTodo(event) {
    this.setState({newTodo: { text: event.target.value, isCompleted: false }})
  };

  handleClick(todo) {
    todo.isCompleted = true;
    const todos = this.state.todos;
    this.setState({todos: todos,
       newTodo: {text: '', isCompleted: false}});
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  removeItems(){
    let todos = this.state.todos;    
    this.state.todos = todos.filter((todo) => {
      return !todo.isCompleted;
    });
    todos = this.state.todos;   
    this.setState({todos: todos,
      newTodo: {text: '', completed: false}});
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  render() {
    return (
      <div className='list'>
        {this.state.todos.map((todo, i) =>{
          return (
            <p key={i} className={todo.isCompleted? 'completed' : 'incomplete'}>{i + 1}. {todo.text} 
              <i onClick={() => this.handleClick(todo)} className="fa fa-check-circle" aria-hidden="true"></i>
            </p>
          )
        })}
        <form onSubmit={this.addTodo}>
          <div className="form-group">
            <input className="form-control" type="text" onChange={this.handleNewTodo} placeholder="Add a new todo!" value={this.state.newTodo.text} />
          </div>
        </form>
        <br />
        <button className={(this.state.todos.length > 0) ? "btn btn-success" : "hideButton"}  onClick={this.removeItems}>Remove completed items</button>
      </div>
    );
  }
}

export default List;