import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            items: ['Going to the mall', 'Grocery shopping', 'Study for React', 'Writing a chapter'],
            newItem: ''
        }

        render() {
            return (
                <div>
                    {this.state.items.map(item => <div>{item}</div>)}
                </div>
            );
        }
    }
}

export default TodoList;