// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                props.items.map( item => <li>item.task</li>);

            </ul>
        )
}


export default TodoList;