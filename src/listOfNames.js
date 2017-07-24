import React from 'react';

const ListOfNames = (props) => {
    return (
        <ul>
            {props.ingredList.map((name, index) => {
                return <li key={name.toString()}>{name}</li>;
            })}
        </ul>
    );
};

export default ListOfNames;
