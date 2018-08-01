// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const MyArr = [];

const TodoList = props => {
    return (
       {MyArr.map(item => <div>{item.something}</div>)}


            
        
    );
};

export default TodoList;


// this is our list
