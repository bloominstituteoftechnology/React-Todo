import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.todo);
        return (
<div>
    {this.props.todo.task}
</div>
        );
    }
}

export default Todo;