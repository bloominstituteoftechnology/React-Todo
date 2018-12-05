import React from 'react';


const Tasks = props => {
  
  return (
<div>
<input 
  type="text"
  onChange={props.changeNameHandler}
  placeholder="Add task"
  value={props.todo}
/>

</div>

);
};
export default Tasks;


/* <input
type="text"
onChange={this.changeNameHandler} 
placeholder="Add task"
value={this.state.todo}
/> */