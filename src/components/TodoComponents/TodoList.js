// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

const List = (props) => {
    return (
        <div>
            {this.state.todolist.map(newToDo => {
                return (
                    <ToDo key={newToDo.id} value={newToDo.task} />
                )
            })}
        </div>
    )
}

export default List;

// class List extends App {
//     constructor(){
//         super();
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.todolist.map(newToDo => {
//                     return (
//                         <div key={newToDo.id}>
//                             {newToDo.task}
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }