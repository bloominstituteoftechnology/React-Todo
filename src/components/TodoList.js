// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';



const TodoList = props => {
    
    return (
        <div>
            {props.todo.map(todo => (
                <Todo todo={todo} key={todo.id} toggleCompleted={props.toggleCompleted}/>
            ))}
            <button onClick={() => props.clearCompleted()}>Clear Completed</button>
        </div>
    )
}

// class TodoList extends React.Component {
//     constructor (props) {
//         super ();
//         this.state = {
//             todo: props.todo
//         }
//         console.log(this.state.todo)
//     }

//     componentWillReceiveProps({todo}) {
//         this.setState({...this.state, todo: todo})
//     }

//     render () {
//         return (
//             <div>
//                 {this.state.todo.map(todo => (
//                     <Todo todo={todo} key={todo.id}/>
//                 ))}
//             </div>
//         )
//     }
// }

export default TodoList