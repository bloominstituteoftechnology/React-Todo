// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

/*
    <TodoList /> receives your Todos array and iterates over 
    the list generating a new <Todo /> for each element in the array.
*/

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
        console.log("TodoList props: ", props)
        return (
            <div>
                {props.todos.map(todo => 
                    <Todo
                      id={todo.id}
                      key={todo.id}
                      task={todo.task} 
                      completed={todo.completed}
                      completeHandler={props.completeHandler}/>
                )}
            </div>
        )
}

// the code below works, but this.props.todos.map() makes it
// unnecessary to use class component in this case
// so I decided to use functional component
// class TodoList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             todoList: props.todos
//         }
//     }

//     render() {
//         console.log("TodoList props: ", this.props)
//         return(
//             <div>
//                 {this.props.todos.map(todo =>
//                     <Todo task={todo.task} key={todo.id}/>
//                 )}
//             </div>
//         )
//     }
// }

export default TodoList;


