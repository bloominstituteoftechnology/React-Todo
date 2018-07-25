// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Task from './Todo.js';

class List extends React.Component {

    state = {
        todos: [
            { value: 'Clean kitchen', done: false },
            { value: 'Wash clothes', done: true }
        ]

    }

    render() {
        return (
            <div className="List">
                {this.state.todos.map((todo, index) => {
                    return (
                        <Task
                            key={index}
                            todo={todo}
                        />
                    )
                })}
            </div>
        );
    }
}

export default List;
