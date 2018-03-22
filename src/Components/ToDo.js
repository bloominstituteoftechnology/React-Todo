import React from 'react';

const Todo = (props) => {
    console.log("PROPS", props);
    return (
        <div>
            <ul> {this.props.todos.map((todo, i) => {
                return <li key = {i}>{ todo }</li>
            })} </ul> 
        </div>    
    );
}

export default Todo;