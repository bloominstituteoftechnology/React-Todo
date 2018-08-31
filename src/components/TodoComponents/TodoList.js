import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuidv4 from 'uuid/v4';

import './TodoList.css';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
        this.search = React.createRef();
    }

    clearAll = () => {
        this.props.clearAllComplete();
    }

    searchTitles = (e) => {
        e.preventDefault();
        this.setState({
            searchTerm: this.search.current.value
        });
    }

    render() {
        
        let todoList = this.state.searchTerm.length <= 0 
        ? this.props.todoList.map(todo => <Todo toggleCompleteBoolean={this.props.toggleCompleteBoolean} key={uuidv4()} title={todo.title} body={todo.body} time={todo.time} complete={todo.complete} self={todo} /> )
        : this.props.todoList.filter(todo => todo.title.includes(this.state.searchTerm) || todo.body.includes(this.state.searchTerm)).sort((a,b) => a.title - b.title ).map(todo => <Todo toggleCompleteBoolean={this.props.toggleCompleteBoolean} key={uuidv4()} title={todo.title} body={todo.body} time={todo.time} complete={todo.complete} self={todo} /> )

        return (
            <div className="todo-list">
                <input type="search" ref={this.search} placeholder="Search by Title" onChange={this.searchTitles} />
                { todoList }
                <TodoForm addTodo={this.props.addTodo} />
                {
                    this.props.todoList.length > 0
                    ?  <button 
                            className="remove-completed-todos btn color-white"
                            type="reset"
                            onClick={this.clearAll}
                        >
                            Clear Completed
                        </button>
                    : ''
                }
            </div>
        )
    }
}