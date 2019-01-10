import React from 'react';

import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
            {props.todoDataList.map((todo, id) => {
                return (
                    <Todo 
                        todo={todo} 
                        key={todo.id}
                        toggleCompleted={props.toggleCompleted}
                    />
                );
            })}
        </div>   
    );
}

export default TodoList;
































//Receives Todo's array and iterates over the list generating a new <Todo />
