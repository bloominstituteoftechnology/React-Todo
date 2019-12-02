import React from 'react';
import Todo from './Todo';
function TodoList(props) {

    return (
        <div>
            {props.list ? props.list.map((item) => {return <Todo item={item} key={item.id} handleChange={props.handleChange} />}) : ''}
        </div>
    )
}
export default TodoList;