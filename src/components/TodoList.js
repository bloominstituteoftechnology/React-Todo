import React, { Component} from 'react';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleListInput = event => {
    this.setState({ newTodo: event.target.value }
  )};


  addTodo = event => {
    event.preventDefault();
    const nList = this.state.todos;
    nList.push(this.state.newTodo);   
    this.setState({
      newTodo: '',
      todos: nList
    }); 
  };
   

  render() {
    return (
      <div>
        {this.state.todos.map(item => <div>{item}</div>)}
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleListInput} placeholder="type in something" value={this.state.newTodo} />
        </form>
      </div>
    );
  }
}

  

export default TodoList; 