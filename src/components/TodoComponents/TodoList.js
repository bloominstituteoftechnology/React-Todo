import React from 'react';
import Todo from "./Todo.js";

class TodoList extends React.Component {
render (props) {
    return (
        <div className="list">
            {this.props.tasks.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    )
}
}

export default TodoList