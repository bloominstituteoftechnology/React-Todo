import React from 'react';

class Todo extends React.Component{

    render(){
        // console.log(this.props)
        return(
            <li>{this.props.todoName}</li>
        )
    }
}
export default Todo;