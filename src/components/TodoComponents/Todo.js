import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return (
            <div class="todo" data-id={this.state.id} data-completed={this.state.completed}>
                {this.state.task}
            </div>
        )
    }
}

export default Todo;