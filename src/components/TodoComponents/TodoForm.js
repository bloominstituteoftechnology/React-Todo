import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        };
    }

    render() {
        return (
            <form>
                <input type="text" name="todoText" value={this.state.todoText} />
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;