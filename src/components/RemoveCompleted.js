import React from 'react';

import './Todo.css';

class RemoveCompleted extends React.Component {

handleClick = (e) =>{
    e.preventDefault();
    this.props.removeCompleted();
}
 
  render() {
      
    return (
      <div>
         <button onClick = {this.handleClick}>Clear Completed Tasks</button>
      </div>
      
    );
  }
}

export default RemoveCompleted;
