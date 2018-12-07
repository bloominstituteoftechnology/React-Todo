import React from 'react';
import {render} from "react-dom";


class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoClickFn : props.todoClickFn,
            todo : props.todo
        }
        this.todoClickFn=this.todoClickFn.bind(this);
    }

    todoClickFn() {
        this.state.todoClickFn(this.state.todo);
    }

    render() {
        if (this.state.todo.completed == true) {
            return <div style={{ textDecoration: 'line-through'}} onClick={this.todoClickFn}> {this.state.todo.task}</div>
        } else {
            return <div onClick={this.todoClickFn}> {this.state.todo.task}</div>
        }
    }
}

export default Todo;
//class Todo extends React.Component {
//
//     constructor (props) {
//
//         super(props);
//
//         this.state = {
//             task : props.taskProp,
//             fn : props.onClickFn
//          };
//
//
//     }
//
//     onClickTodo = (event) => {
//         console.log("Click called");
//         this.state.fn(this.state.task);
//     }
//
//     render () {
//         if (this.props.taskProp.completed) {
//             return <li> <button onClick={this.onClickTodo}><strong><strike>{this.props.taskProp.task}  </strike></strong></button> </li>;
//         } else {
//             return <li><button onClick={this.onClickTodo}><strong>{this.props.taskProp.task} </strong></button> </li>;
//         }
//     }
// }
//
// export default Todo;