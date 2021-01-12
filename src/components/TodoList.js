import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ""
        }
    }

    handleSearch = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <>
                <input
                    value={this.state.searchInput}
                    name="searchInput"
                    onChange={this.handleSearch}
                />
                <ul>
                    {this.props.todos.map(
                        todo =>
                            todo.task.includes(this.state.searchInput) && (
                                <Todo   
                                    todo={todo}
                                    toggleCompleted={this.props.toggleCompleted}
                                />
                            )
                    )}
                </ul>
            </>
        )
    }
}

export default TodoList