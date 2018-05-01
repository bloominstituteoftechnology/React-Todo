import React from 'react';

const DisplayList = props => {
    return (
    <ul>
    {props.toDoList.map(item => {
    return <li key={item.id}>{item.name}</li>;
     })}
     </ul>
    );
};

export default DisplayList;