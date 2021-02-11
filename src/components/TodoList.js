import React from 'react';

class TodoList extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.message}</h1>
            </div>
        )
    }
}

export default TodoList
