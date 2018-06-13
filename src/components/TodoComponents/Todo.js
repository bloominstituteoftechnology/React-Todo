import React from 'react';
class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            task: "",
            id: Date.now(),
            completed: false
        };
    }
    render() {
        return <p>{this.state.task}</p>;
    }
}
export default Todo;