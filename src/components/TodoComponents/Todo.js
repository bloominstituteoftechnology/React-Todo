import React, { Component } from 'react';

import { Button, Segment } from 'semantic-ui-react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { task, complete, id } = this.props.todo;

        return (
            <Segment>
                <h2>{`Task: ${task}`}</h2>
                <p>{`Completed: ${complete}`}</p>
                <p>{`Date Added: ${new Date(id)}`}</p>
                <Button
                    id={id}
                    color="red"
                    onClick={e => this.props.handleDeleteTask(e)}
                    icon="delete"
                />
                <Button
                    id={id}
                    color="orange"
                    onClick={e => this.props.handleCompleted(e)}
                    content={
                        complete ? 'Mark an unfinished' : 'Mark as complete'
                    }
                />
            </Segment>
        );
    }
}

export default Todo;
