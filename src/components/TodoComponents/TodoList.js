// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

//props = props.todos - array of todos
const TodoList = ({todos}) =>{

    return (todos.map(todo =>{

            return (
                <div key={todo.id}>
                    <Todo todo={todo} />
                </div>

            );
        })

    )


}


export default TodoList;