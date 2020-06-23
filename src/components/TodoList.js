// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render(){
        return(

            <ul className='fix'>
                
                {this.props.todo.map(task => (
                    <Todo key={task.id} task={task} toggleCompleted={this.props.toggleCompleted} />
                ))}
                    {/* // {console.log(task)}   */}
                    
            </ul>
        ) 
    }

}


export default TodoList;