import React from 'react';

class TodoList extends React.Component {
    createTasks = todo => {
      return (
        <li key={todo.id}
            todo={todo}
            onClick={this.props.handleClick}
            >
                {todo.task}
        </li>
      )
    }
    render() {
      const todoEntries = this.props.todos
      const listItems = todoEntries.map(this.createTasks)
  
      return <ul className="theList">{listItems}</ul>
    }
}
    
export default TodoList