import React from 'react';
import Todo from '../TodoComponents/Todo'

const TodoList = props => {
    return(
        <div>
        {
            props.todo.map(ele => {
                return <Todo strike={props.strike} task={ele.task}/>
            })
        }
        </div>
    );
    
}

export default TodoList;
//`<TodoList />` receives your Todos array and iterates over the list 
//generating a new `<Todo />` for each element in the array.
