import React from 'react';
import './Todo.css';
const ListItem = props => {
    return (
    <div>
        {props.listItem.task}
    </div>
    );
}
export default ListItem;