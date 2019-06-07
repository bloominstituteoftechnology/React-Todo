import React from 'react';
import Todo from './Todo';

<<<<<<< HEAD
function TodoList (props){
return (
    <div className='todo-list'>
    {props.todos.map(taskitems => {
        return (
       <Todo todoitem={taskitems} />
       
        );
    })}
    </div>
);
}

export default TodoList;
=======
const TodoList = props => {
    return (
    <div>
        {
          props.todos.map( todo => (
            <Todo task={todo.task}/>
          )
          )
        }
    </div>
    );
};
export default TodoList;
>>>>>>> 74c34564155fa8f343a4c5a192b2a74466b8cbf1
