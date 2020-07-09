import React from "react";

class TodoForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			todoItem: ""
		};
	}

	changeHandler = (event) => {
		console.log(this.state.todoItem);
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	submitHandler = (event) => {
    	event.preventDefault();
    	this.props.addTodo(this.state.todoItem);
  	};

	render(){
		return(
			<div>
				<form onSubmit={this.submitHandler}>
					<input type="text" name="todoItem" value={this.state.todoItem} onChange={this.changeHandler} />
					<button>add</button>
				</form>
				<button onClick={this.props.clearCompleted}>clear</button>
			</div>
			
		);
	}
}

export default TodoForm;