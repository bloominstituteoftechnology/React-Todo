import React from 'react';
import './Todo.css';




// export class TodoForm extends React.Component {



//     render() {
//         return (

//             <div>
//                 <form onSubmit={this.addItem} >
//                     <input placeholder="Enter your task" />
//                     <button type="submit">Add Todo</button>
//                     <button>Clear From Form</button>
//                 </form>
//             </div>


//         )
//     }
// }

export const TodoButton = (props) => {
    return (

        <button className={props.buttonStyle} onClick={() => props.handleClick(props.value)} >{props.text}</button>

    )
}

export const TodoInput = () => {
    return (
        <input ref={() => this._inputElemenmt}></input>
    )
}