import React, {Component} from 'react';
import TodoList from "TodoList";

const TodoHead = () => {
    return(
    <div>
        <h1>Today's Todo's:</h1>
    </div>
    )
}

const Rows = props => {
    return (
        <div className = "flex rows">
            <p className="row1">{props.time}</p>
            <p className="row2">{props.todo}</p>
        </div>
    )
}

class Todo extends Component {
    constructor() {
        super();
    }

    render() {
        return(
        <div>
            <TodoHead/>
            <Rows time="Time" todo="Todo"/>
            <Rows time="8:30" todo="This is an example todo"/>
        </div>
        )
    }
}
export default Todo;