import React from 'react';
import TodoList from './src/components';
/* import components from .src */




const App = () => (
  <div>
    <h2>Todo App</h2>
    <ToDoList/>


  </div>
);

export default App;

//Create a class that extends the component
//Have an array






// MORE ADVANCED: 
//Strike-through: 
/* render() {
  const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
  return (
      <div style={styles} onClick={this.handleClick}>{this.props.thing}</div>
  );
} */
