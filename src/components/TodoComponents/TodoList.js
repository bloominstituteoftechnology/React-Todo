// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component { 
    render() { 
        <div>
            {this.props.todos.map(todo => {
                return <Todo key={todo.id} todo={todo} handleClick={this.props.handleClick} />
            })}
        </div>
    }
}



  export default TodoList;