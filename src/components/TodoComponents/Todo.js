import React from 'react';



class Todo extends React.Component{

    render() {

        return (

            <div>
                {this.props.todos.map( todo => {
                     return (
                     
                     <div> {todo.task} </div>
                     ) 
                     })}
            </div>
        
        )
    }
}
export default Todo;