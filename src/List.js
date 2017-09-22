import React, { Component } from 'react';

class List extends Component {
    constructor() {
        super();
        const todos = JSON.parse(localStorage.getItem("todos"));
        console.log(todos);
        this.state = {
            todos: todos || [],
            newTodo: {text: "", isCompleted: false}
        };
        this.handleNewTodo = this.handleNewTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    addTodo(event) {
        event.preventDefault();            
        const todos = this.state.todos;
        todos.push(this.state.newTodo);
        this.setState({todos: todos,
                     newTodo: {text: '', completed: false}});
        localStorage.setItem("todos", JSON.stringify(todos));
      };

      handleNewTodo(event) {
        this.setState({newTodo: { text: event.target.value, isCompleted: false }})
      };

      handleClick(todo) {
        todo.isCompleted = true;
        const todos = this.state.todos;
        this.setState({todos: todos,
            newTodo: {text: '', completed: false}});
        localStorage.setItem("todos", JSON.stringify(todos));
      }

      render() {
        return (
          <div className="">
            {this.state.todos.map((todo, i) =>{
                return (
                    <p key={i} onClick={() => this.handleClick(todo)} className={todo.isCompleted? 'completed' : 'incomplete'}>{i + 1}. {todo.text}</p>
                )
            })}
            <form onSubmit={this.addTodo}>
              <div className="form-group">
                <input className="form-control" type="text" onChange={this.handleNewTodo} placeholder="Add a new todo!" value={this.state.newTodo.text} />
              </div>
            </form>
          </div>
        );
      }
}

export default List;