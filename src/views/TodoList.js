import React from 'react';

const TodoList = props => {
    return(
        <div>
            <h2> {props.data.title}</h2>
            

            <ul>
                <li>
                    Item 1
                </li>

                <li>
                    Item 2
                </li>

                <li>
                    Item 3
                </li>
            </ul>
        </div>
    )
}

export default TodoList;