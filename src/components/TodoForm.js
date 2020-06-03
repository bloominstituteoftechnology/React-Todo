import React from "react";
import { render } from "@testing-library/react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        }
    };


render() {
    return (
        <form>
            <input type="text" name="task" />
            <button>Add</button>
            <button>Clear Completed</button>
        </form>
    )
}
};

export default TodoForm;