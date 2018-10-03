// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// takes in todo data and displays to screen
import React from 'react';
//import './styles.css';

const TodoList = props =>{
    return(
        <div>
            {props.listData.map(item => {
            return <h1>{item.listItem}</h1>;
        })}
        </div>
    )
}
export default TodoList;

// I do not know why this wasn't working so I put it directly into my code

// This could not take in listData when it was exported to app.js