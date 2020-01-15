// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';

class TodoList extends Component {

    render() {
        return (
            <div>
                {this.props.generateTodo()}
            </div>
        );
    }
}

TodoList.propTypes = {

};

export default TodoList;