import React from "react";

class Todo extends React.Component{
    props = {
        task: this.props.task
    }

    render() {

        return ( 
            <div>
                <h1> Existing Task </h1> 
                <p>{this.props.task}</p>
                <p>{this.props.id}</p>
                <p>{this.props.completed}</p>
            </div>
        )
    }
}

export default Todo;