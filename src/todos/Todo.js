import React, { Component } from 'react';

export default class Todo extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			x: 0
		}
	}

	handleMove = (e) => {
		const gWX = e.type === 'mouseenter' ? e.clientX : e.touches[0].clientX;
		const target = e.target.tagName === "DIV" ? e.target : e.target.parentNode;
		const x = ((target.getBoundingClientRect().left + (target.offsetWidth / 2)) - gWX);
		this.setState({ x: x });
	}

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
				key={this.props.index}
				// onTouchStart={this.handleMove}
				onTouchMove={this.handleMove}
				style={{
					transform: this.state.x / -5 > 0 ? 'translateX(0px)' : `translateX(${this.state.x / -5}%)`
				}}>
				<h2
					style={{
						textDecoration: this.props.completed ? 'line-through' : 'none'
					}}>{`${this.props.index+1}) ${this.props.text}`}</h2>
				<input 
					data-index={this.props.index}
					type="checkbox" 
					onChange={this.props.handleChange} 
					checked={this.props.completed} />
				<button 
					data-index={this.props.index} 
					onClick={this.props.deleteTodo}>X</button>
			</div>
		);
	}
}