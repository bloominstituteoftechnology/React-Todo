import React from 'react';
import PropTypes from 'prop-types';

// Importing COMPONENTS
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return (
        <div style={TodoListStyles}>
          <Todo todo={this.props.todo}/>
        </div>
    );
  }
}

const TodoListStyles = {
  backgroundColor: '#f4f4f4',
  padding: '10px'
}

TodoList.PropType = {
  todo: PropTypes.array.isRequired
};

export default TodoList;
