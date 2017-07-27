import React from 'react';

const ListOfToDoItems = (props) => {
    const styles = {
        listStyleType: 'none',
    };
    const items = props.toDoList;
    const listItems = items.map((item) =>
        <li key={item.toString()}>
            {item}
        </li>
    );
    return (
        <ul style={styles}>
            { listItems }
        </ul>
    );

};

export default ListOfToDoItems;
