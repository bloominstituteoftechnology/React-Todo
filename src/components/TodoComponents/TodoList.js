import React from 'react'
import Todo from './Todo'
const TodoList = props => {
    return (
        <div>
            {props.passedTodos.map(todo => {
                return <Todo key={Math.random()} singleTodo={todo} />;
            })}
        </div>);
}


export default TodoList;
