import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super();
    }

    render() {

        return (

            <div>
                <ul className="todoList">
                    {this.props.todoList.map((item) => <Todo item={item} key={item.id} updateCompleted={this.props.updateCompleted} />)}
                </ul>
            </div>
        )
    }
}

export default TodoList