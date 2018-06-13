// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                {
                    this.props.list.map(todo=>{
                        return <Todo key={todo.id} todo={todo.task} />
                    })
                }
                </ul>
            </div>
        );
    }
}

export default TodoList;
