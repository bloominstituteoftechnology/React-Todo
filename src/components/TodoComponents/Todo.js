import React from 'react';

class Todo extends React.Component{


    render() {

        return (
            <div>{this.props.todos.map(item => {
                return (
                    <ul key={item.id} id={item.id} task={item.task}>
                        <li>{item.task}</li>
                    </ul>
                        )
            })} 
            </div>
        )
    }
}
export default Todo;