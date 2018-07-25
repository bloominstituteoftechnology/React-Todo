// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Task from './Todo.js';

class List extends React.Component {

    render() {
        return (
            <div className="List">
                {this.props.todos.map((todo, index) => {
                    return (
                        <Task
                            key={index}
                            handleClick={this.props.handleClick}
                            todo={todo}
                        />
                    )
                })}
            </div>
        );
    }
}

export default List;
