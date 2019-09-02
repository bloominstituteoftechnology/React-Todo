// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';



class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log('TodoList', props);
    }
    render() {
        console.log('TodoList', this.props);
        return (
            <div>{this.props.todos.map(todo => <div>{todo.task}</div>)}</div>
        );
    }
}

export default TodoList;
