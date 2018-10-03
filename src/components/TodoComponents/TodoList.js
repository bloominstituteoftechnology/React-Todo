// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
import React from 'react';

function TodoList(props) {

    return (
        <div>
            {props.todoArr.map(item => {
            return <div>{item}</div>;    
            })}
        </div>
    );
}

export default TodoList;


