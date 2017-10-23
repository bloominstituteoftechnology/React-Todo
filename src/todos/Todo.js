import React, { Component } from 'react';

export default class Todo extends Component {

	handleEnd = () => {
		this.setState({x: 0});
	}

	deleteTodo = (e) => {
		this.setState({x: 0});
		this.props.deleteTodo(e.target.dataset.index);
	}

	render(){
		// console.log(this.state.x/(window.innerWidth * 0.9));
		return (
			<div 
				className="todo" 
				key={this.props.index}>
				<h2
					style={{
						textDecoration: this.props.completed ? 'line-through' : 'none'
					}}>{`${this.props.index+1}) ${this.props.text}`}</h2>
				<div className="checks">
					<input 
						data-index={this.props.index}
						type="checkbox" 
						onChange={this.props.handleChange} 
						checked={this.props.completed} />
					<button 
						data-index={this.props.index} 
						onClick={this.deleteTodo}>X</button>
				</div>
			</div>
		);
	}
}