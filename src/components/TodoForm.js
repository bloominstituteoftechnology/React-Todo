import React from "react";

class TodoForm extends React.Component{
    props = {
        todos: this.props.todos
    }

    render() {

        return ( 
            <div>Form version of EAT IT</div>
        )
    }
}

export default TodoForm;