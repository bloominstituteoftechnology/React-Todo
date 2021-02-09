import React from "react";
import Todo from "./Todo"


class TodoList extends React.Component{

    render() {
        return (
            <div>
                <h1> TASK LIST BELOW </h1>
                <div>
                    {this.props.todos.map((todo, index) => {
                        return <Todo key={index} data={todo} toggle={this.props.toggle}/>
                    })}
                </div>
            </div>
        )
    }
}

export default TodoList;