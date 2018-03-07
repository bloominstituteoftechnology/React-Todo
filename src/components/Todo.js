import React, { Component } from "react";

class Todo extends Component {
    render() {
        const { clicked, completed, deleteTodo, todo } = this.props
        // used destructuring so I don't have to use this.props for everything
        const styles = completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={styles} onClick={() => clicked(todo)}>{todo}</div>
                {todo ? <button
                    style={{border:'none'}}
                    onClick={() => deleteTodo(todo)}
                    value={todo}>❌</button>
                    : null}
            </div>
        );
    }
}


export default Todo;
