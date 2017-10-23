import React, { Component } from 'react';
import AddTodo from '../addTodo/AddTodo';
import Todo from './Todo';
import update from 'immutability-helper';

export default class Todos extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos: []
		}
	}

	componentDidMount() {
		if(window.localStorage) console.log(window.localStorage);
	}

	handleChange = (e) => {
		const i = e.target.dataset.index;
		const s = this.state.todos;
		const newState = update(s, {[i]: {completed: {$set: e.target.checked}}});
		newState.sort(function(a,b) { 
		  return new Date(b.date).getTime() - new Date(a.date).getTime() 
		});
		this.setState({
			todos: newState
		});
	}

	addTodo = (val) => {
		const s = this.state.todos;
		const newTodo = {
			text: val,
			date: new Date(),
			completed: false
		}
		const newState = update(s, {$splice: [[0, 0, newTodo]]});
		newState.sort(function(a,b) { 
		  return new Date(b.date).getTime() - new Date(a.date).getTime() 
		});
		this.setState({
			todos: newState
		});
	}

	deleteTodo = (i) => {
		console.log(i);
		const s = this.state.todos;
		const newState = update(s, {$splice: [[i, 1]]});
		newState.sort(function(a,b) { 
		  return new Date(b.date).getTime() - new Date(a.date).getTime() 
		});
		this.setState({
			todos: newState
		});
	}

	render(){
		return(
			<div className="todos">
				<AddTodo 
					addTodo={this.addTodo} />
				<div className="todos-container">
					{
						this.state.todos.map((todo, i) => {
							return (
								<Todo 
									key={i}
									completed={todo.completed}
									index={i} 
									text={todo.text}
									handleChange={this.handleChange}
									deleteTodo={this.deleteTodo} />
							)
						})
					}
				</div>
			</div>
		);
	}
}