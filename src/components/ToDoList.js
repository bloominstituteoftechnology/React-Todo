import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDolist extends Component {
    render() {
        return (
            <div>
                <h3>Things to Do!</h3>
                <ToDo />
            </div>
        );
    }
}
export default ToDolist;