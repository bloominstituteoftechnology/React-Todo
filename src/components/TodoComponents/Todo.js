import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    lineThrough = () => {
        return {
            textDecoration: this.props.task.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.task;

        return (
            <div style={taskStyle}>
                <input
                    style={{marginRight: '10px'}}
                    type="checkbox"
                    onChange={this
                    .props
                    .markComplete
                    .bind(this, id)} />
                <p style={this.lineThrough()}>{title}</p>
            </div>
        )
    }
}

Todo.propTypes = {
    task: PropTypes.object.isRequired
}

const taskStyle = {
    display: 'flex',
    alignItems: 'center',
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px solid #ccc',
}

export default Todo;