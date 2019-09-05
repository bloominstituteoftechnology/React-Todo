import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: 'white',
      borderRadius:'3px',
      borderBottom: '1px #ccc solid',
      maxWidth: '50%',
      marginLeft:'140px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#857663',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem