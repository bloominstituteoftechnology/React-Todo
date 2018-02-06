import React from 'react';


class Todo extends React.Component {
    state = {
        list: [
            {
                id: 1, 
                task: 'Take out the trash',
            },
            {
                id: 2, 
                task: 'Feed the dog',
            },   
        ],
    }
    render() {
        return (
        <div>
            <h1>Todo App</h1>
            <ul>
                {this.state.list.map((task) => {
                    return <li key={this.id}>{task}</li>
                })}  
            </ul>
        </div>
        )
    }    
}

export default Todo