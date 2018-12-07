import React from 'react';
import './Todo.css'


class Todo extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isActive: true
		}
	}
	completedHandler = () => {
		// console.log('hi')
		const currentSelected = this.props

		this.props.fullyCompleted(currentSelected);
	}

	ToggleClass = (e) => {
		// const currentSelected = this.props
		const currentSelected = this.props;
		// const currentSelected = this.props
			this.setState({isActive: !this.state.isActive})
			this.props.fullyCompleted(currentSelected)
		// console.log(currentSelected)

 
	}

	render(){	
		return  <li 
					className = {(this.state.isActive) ? 'non-active' : 'active'}
					onClick = {this.ToggleClass}> {this.props.task} </li>
	}
}


export default Todo;