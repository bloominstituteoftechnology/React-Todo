import React from 'react';
import Todo from './Todo'

// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> 
// for each element in the array.

const TodoList = props => {
    return (
        <div>
           {/* {props.currentList.map(task => {
               return <li key={Math.random()}> {task}</li>;
           })} */}
           {props.currentList.task}
        </div>
    );
}

// const TodoList = props => {
//     return (
//         <ul>
//             {props.currentList.map(todoTask => {
//                 return <li key={Math.random()}> {band}</li>;
//             })}
//         </ul>
//     )
// }

export default TodoList;