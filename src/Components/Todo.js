import React, {Component} from 'react';
import TodoList, {Button} from "./TodoList";

class Todo extends Component {
    constructor() {
        super();
    }

    TodoHead = () => {
        return(
        <div>
            <h1>Today's Todo's:</h1>
        </div>
        )
    }

    Rows = props => {
        return (
            <div className = "flex rows">
                <p className="row1">{props.time}</p>
                <p className="row2">{props.todo}</p>
            </div>
        )
    }
    

    render() {
        return(
        <div>
            <this.TodoHead/>
            <this.Rows time="Time" todo="Todo"/>
            <this.Rows time="8:30" todo="This is an example todo"/>
        </div>
        )
    }
}
export default Todo;