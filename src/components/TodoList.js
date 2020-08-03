// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }

    }

   handleChange(event) {
       this.setState({search: event.target.value})
   }

    render() {
        let filteredTodos = this.props.todos.filter(
            (todo) => {
                return todo.task.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        return(
            <div className='todo-list'>
                <input type="text" className="input" placeholder='search...' value={this.state.search} onChange={this.handleChange.bind(this)} />

                {filteredTodos.map(item => (
                    <Todo 
                    key={item.id} 
                    todo={item}
                    toggleTodo={this.props.toggleTodo}
                    />
                ))}
                <button className='clear-button' onClick={this.props.clearPurchased}>
                    Clear Completed Tasks
                </button>

            </div>
    )
}
}

export default TodoList