import React from 'react';

// function Todo(props) {
//     return <li>{props.list.task}</li>;
// }

class Todo extends React.Component {
    state = {
        list: ['Take out the trash','Wash the dog'],
    };
    render() {
        return (
        <div className="todo-list">
            <h1>{this.props.heading}</h1>
            <ul>
                {this.state.list.map((task, i) => {
                    return <li key={i}>{task}</li>
                })}  
            </ul>
        </div>
        ) // return
    } // render    
} // class

export default Todo