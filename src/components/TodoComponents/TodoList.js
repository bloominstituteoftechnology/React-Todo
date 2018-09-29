// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                < TodoForm
                    input={this.props.newTodo}
                    checkHandler={this.props.checkHandler}
                    checkHandler={this.props.checkHandler}
                    submitHandler={this.props.submitHandler}
                    valueHandler = {this.props.valueHandler}
                    todos = {this.props.todos}
                 />
                < Todo
                    toggle = {this.props.toggleCompletedFlag}
                    checkHandler={this.props.checkHandler}
                    submitHandler={this.props.submitHandler}
                    valueHandler = {this.props.valueHandler}
                    todos = {this.props.todos}
                 />
        </div>
        )
    }







}

export default TodoList;


