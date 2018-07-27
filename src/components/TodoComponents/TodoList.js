import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    // props is { list, crossout }
    return (
        <div>
             {props.list.map(element => {
                 console.log(props.crossout)
                 return (
                    <Todo
                        crossout={props.crossout}
                        completed={element.completed}
                        key={element.id}
                        text={element.task}
                        itemId={element.id}
                    />
                ); 
             })}
        </div>
    );
}


export default TodoList;
