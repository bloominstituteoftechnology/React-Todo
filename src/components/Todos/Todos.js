import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    const { todos } = this.props;
    const Todos = () =>
      todos.map((todo, id) => (
        <TodoItem
          key={id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      ));
    return (
      <ul>
        <Todos />
      </ul>
    );
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
