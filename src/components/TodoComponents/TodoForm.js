import React from 'react';

class ToDoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: ''
		}
	}

	changeHandler = (e) => {
		this.setState({inputText: e.target.value});
	}

	submitHandler = (e) => {
		e.preventDefault();
		this.props.createNewTodo(this.state.inputText)
		this.setState( {inputText: ''} )
	}

	render(){
		return (
			<form onSubmit={this.submitHandler}>
				<input 
					type="text"
					value = { this.state.inputText }
					onChange = {this.changeHandler}
				/>

				<button type="submit">Add ToDo </button>
				<button>Clear ToDos</button>
			</form>
		);
	}
}

export default ToDoForm;