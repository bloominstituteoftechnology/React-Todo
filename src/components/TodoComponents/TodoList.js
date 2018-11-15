import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className = 'todo-list'>
            {props.todos.map(todo => (
            <Todo 
                handleToggleComplete={props.handleToggleComplete}
                key={todo.id}
                todo={todo}
                />
            ))}        
        </div>
    );
}


export default TodoList;

// const TodoList = props => {
//     return (
//         <div className='todo-list'>
//             {props.tasks.map(taskInMap => (
//                 <Todo
//                     key={taskInMap.taskName}
//                     taskOnProps={taskInMap}
//                 />
//             ))}
//             The TodoList is connected? No?
//         </div>
//     );
// }