import React from 'react';
// class Todo extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             task: "",
//             id: Date.now(),
//             completed: false
//         };
//     }
//     render() {
//         return <p>{this.state.task}</p>;
//     }
// }
const Todo = (props) => {
    return (
        <div>{props.todo.task}</div>
    )
}

export default Todo;