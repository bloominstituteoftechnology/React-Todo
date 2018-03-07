import React, { Component } from "react";

class Todo extends Component {
    render() {
        console.log(this.props)
        const { clicked, completed, deleteTodo, todo } = this.props
        // used destructuring so I don't have to use this.props for everything
        const styles = completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
                
            </div>
        );
    }
}


export default Todo;
