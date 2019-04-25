// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.InitialState = {};
        this.state = this.InitialState
    }
    render() {
        return (
            <form onSubmit={this.listArray} />
        )
    }
}

export default TodoList