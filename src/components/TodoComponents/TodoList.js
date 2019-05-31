// your components will all go in this `component` directory. feel free to
// change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    render() {
        return this.props.tasks.map(task => <Todo key={task.id} task={task} markComplete={this.props.markComplete} />)
    }
}

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default TodoList;
