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
        return <div>Hello, I am Todo.js</div>;
    }
}
export default Todo;