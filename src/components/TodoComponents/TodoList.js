// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    render () {
        return (
            <div>
                {this.props.todos.map(todo => {
                    return <Todo
                        key={todo.id}
                        todo = {todo}
                        handleClick={this.props.handleClick}
                        />
                })}
            </div>
        )
    }
}

export default TodoList;