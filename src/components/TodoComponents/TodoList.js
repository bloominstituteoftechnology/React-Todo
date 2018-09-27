// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component {

    render() {
        return(
            <div>
            <TodoForm valueHandler={this.props.valueHandler} todos={this.props.todos}/>

            <Todo todos={this.props.todos}/>
        </div>
        )
    }







}

export default TodoList;


