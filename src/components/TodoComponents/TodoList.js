// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

const List = (props) => {
    return (
        <ul>
            {/* {this.state.todolist.map(newToDo => {
                return (
                    <ToDo key={newToDo.id} value={newToDo.task} />
                )
            })} */}
        </ul>
    )
}

export default List;
