import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  
  const myClickyHandler = () => {
    this.props.toggleComplete(this.props.id)
  }
  
  return <div>
			<ol>
				<Todo list={props.list} id={props.id} toggleComplete={props.toggleComplete} myClickyHandler={myClickyHandler} />
			</ol>
		</div>;
};

export default TodoList;
