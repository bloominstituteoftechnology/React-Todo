// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = ({list}) => {
        const data = list.map((todo)=>{
        return (<Todo item={todo}/>)
        })
        return <div>{data}</div>
}

export default TodoList;