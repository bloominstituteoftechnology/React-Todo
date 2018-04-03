import React, { Component } from 'react';
import { render } from 'react-dom';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <h2>Todo App</h2>
            </div>
        );
    }
}

render(<Todo />, document.getElementById('root'));
export default Todo;