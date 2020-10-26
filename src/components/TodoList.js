// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {

    render() {
    return(
        <div>
            {console.log(this.props.tasks)}
            {this.props.tasks.map(item => (
                <Todo key={item.id} item={item} toggleTask={this.props.toggleTask} />
            ))}
            <button className="clearBtn" onClick={this.props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    )
            }
}

export default TodoList