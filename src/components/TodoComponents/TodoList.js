// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

//props = props.todos - array of todos
const TodoList = ({todos}) =>{

    return (todos.map(todo =>{

            return (
                <Todo todo={todo} />


            );
        })

    )


}


export default TodoList;