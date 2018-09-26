import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return (
            <div>
              <h1>Todo List</h1>
              {this.state.todos.map(todo => {
                return (
                    <Todo id={todo.id} task={todo.task} completed={todo.completed} />
                );
              })};
            </div>
        )
    }
}

export default Todo;
