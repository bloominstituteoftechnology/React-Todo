import React from 'react';
import './Todo.css';

// const TodoForm = props => {
// 	return(
//         <div className="TodoForm">
//         	<input type="text" className='input' onKeyPress={props.evenClick} />
//         	<button className='addTodo' onClick={props.bClick}>Add Todo</button>
//         	<button className='clearTodo'>Clear Todo</button>
//         </div>
//     );
// }



class TodoForm extends React.Component {

	render() {
		return(
        <div className="TodoForm">
        	<input type="text" className='input' onKeyPress={this.props.evenClick} />
        	<button className='addTodo' onClick={this.props.bClick}>Add Todo</button>
        	<button className='clearTodo' onClick={this.props.destroyTodo}>Clear Todo</button>
        </div>
    );
	}
}

export default TodoForm;