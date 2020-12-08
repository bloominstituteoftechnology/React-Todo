import React, { Component } from 'react';

class Todo extends Component {

    constructor(props) {
        super();

    }

    render() {

        return (

            <div>
                <h2 style={this.props.completed ? { textDecoration: 'line-through' } : null} onClick={() => this.props.markComplete}></h2>
            </div>
       
        )

    }

}

export default Todo