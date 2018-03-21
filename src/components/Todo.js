import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
    }
    
    render() {
      return (
        <ul>        
          { this.props.todos.map((todo, i) => 
              <li key={i}>
                <input type="checkbox" onClick={this.toggleTodo} />
                { todo }
              </li>
            )}
        </ul>  
      )
    }

    toggleTodo(event) {
      if (event.target.parentNode.style.textDecoration !== "line-through") {
        event.target.parentNode.style.textDecoration = "line-through";
      } else {
        event.target.parentNode.style.textDecoration = "none";
      }
    }
}

export default Todo;