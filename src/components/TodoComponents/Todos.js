import React from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  // markComplete = () => {
  //   console.log("Hello");
  // }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  render() {
    return this.props.todos.map(( todo ) => (
        <TodoList key={todo.id} todo={todo} markComplete = 
        {this.props.markComplete}/>
    ))
  }
}

  //PropTypes
  Todos.propTypes = {
    todo: PropTypes.array.isRequired
  }

export default Todos;
