import React, { Component } from 'react';

import { Button, Form } from 'semantic-ui-react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Enter data here</h1>
                <Form>
                    <Form.Group>
                        <Form.Input
                            label="task"
                            placeholder="eat"
                            value={this.props.value}
                            onChange={e => this.props.handleTaskChange(e)}
                        />
                    </Form.Group>
                    <Form.Button
                        primary
                        content="Add New Todo"
                        onClick={this.props.handleSubmit}
                    />
                </Form>
            </>
        );
    }
}

export default TodoForm;
