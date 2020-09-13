import React from 'react';
import PropTypes from 'prop-types';

// Importing COMPONENTS

class Todos extends React.Component {
  render() {
    return this.props.todo.map((todo) => (
      <li style={liStyle}>{todo.task}</li>
    ));
  }
}

//Styles
const liStyle = {
  listStyleType: 'none'
}

//PropTypes
Todos.PropType = {
  todo: PropTypes.array.isRequired
};

export default Todos;
