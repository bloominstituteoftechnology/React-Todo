import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";


// const input = <input></input> ;

// class TodoForm extends React.Component {

    
//     constructor(){
//         super();
//         this.state = {
//             text: 'A WILD STRING APPEARED!',
//         }
    
    
//     }
//         return(
//             <div>
//                 <input text={this.state.text}/>
//             </div>
//         )
// }


const TodoForm = props => {
    return(
        <form>
            <input onChange={props.handleTodoChange}
            type="text"
            name="todo"
            value={props.value}
            placeholder="...todo"
            />
            <button onClick={props.handleClick}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    );
};
export default TodoForm ;