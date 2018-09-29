import React from 'react'
import Todo from './Todo'


class TodoList extends React.Component {
    render(){
        return this.props.todos.map((e) => {
            return (
                <div>
                    <ul>
                        <li><Todo key={e.id} todo={e} toggleCompleted={this.props.toggleCompleted}/></li>
                    </ul>
                </div>  
            )
        });
    } 
}

export default TodoList


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

