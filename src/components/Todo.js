import React from 'react';

class Todos extends React.Component {
  render() {
    return (
      <div className="todo">
        <input type="search" placeholder="Add Todo..." />
      </div>
    );
  }
}

export default Todos;
