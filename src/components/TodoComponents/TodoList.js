import React from 'react';
import Todo from './Todo'

// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> 
// for each element in the array.

// const TodoList = props => {
//     return (
//         <div>
//             Testing
//             <ul>
//             <li>{props.currentList[0].task}</li>
//             <li>{props.currentList[1].task} </li>
//             </ul>

//         </div>
//     );
// }

// // Can successfully display all the TDs from the state array at this point
// const TodoList = props => {
//     let x = [];
//     let y = [];
//     for (let i = 0; i < props.currentList.length; i++) {
//         x.push(props.currentList[i].task)
//     }
//     return x;
// }



// const TodoList = props => {
//     let x = [];
//     for (let i = 0; i < props.currentList.length; i++) {
//         x.push(props.currentList[i].task);
//     }
//     return (
         
//         <ul> 
//            <li> 
//                {x}
//            </li>
//         </ul>
//     )

//     // console.log(x)
//     // return x;
// }


const TodoList = props => {
    let x = [];
    for (let i = 0; i < props.currentList.length; i++) {
        x.push(props.currentList[i].task);
    }

    return ( 
        <ul> 
            {x.map(item => {
                return <li key= {Math.random()}> {item} </li>
            })}
        </ul>
    )

    
    // console.log(x)
    // return x;
}




export default TodoList;