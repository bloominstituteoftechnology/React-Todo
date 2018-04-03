import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    
    render() {
      return (
        <li>
          <input type="checkbox" onClick={ this.toggleTodo } 
                 checked={ this.props.todo.checked } />
          { this.props.todo.content }
          <input type="button" value="x" onClick={ this.deleteTodo } />    
        </li>        
      )
    }

    toggleTodo(event) {
      this.props.toggle(event.target, this.props.id);
    }

    deleteTodo() {
      this.props.delete(this.props.id);
    }    
}

export default Todo;