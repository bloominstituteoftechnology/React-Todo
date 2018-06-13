import React from 'react';


const Todo = props => {
    return(
        <ul>
            {props.toDoList.map(list => <li key={Math.random()}>{list}</li>)}
        </ul>
    );
}


export default Todo;