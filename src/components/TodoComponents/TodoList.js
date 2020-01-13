/*
<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
 */

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    render() {
        return (
            <div className="todo-list">
                {this.props.todos.map((elem) => (
                    <Todo key={elem.id} todo={elem} />
                ))}
            </div>
        );
    }
};

export default TodoList;