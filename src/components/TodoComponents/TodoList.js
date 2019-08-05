import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(){super();}

    props.array.map((item) => {
        return (
            <Todo task={item.task} />
        )
    })
}

export defualt TodoList;