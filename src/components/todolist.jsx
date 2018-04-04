import React, { Components } from "react";
import todo from "./todo";

class todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ""
        };
    }

    addTodo(e) {
        this.setState({
            newTodo: !!e.target ? e.target.value : ""
        });
    }

    render() {
        return (
            <div>
                <input />
                {this.state.todos.map((todo, i) => (
                    <Todo todo={todo} key={i} onClick={this.addTodo}
                ))}
            </div>
        );
    }
}

export default todolist;