import React, { Component } from 'react';


class Todo extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			item: this.props.todo,
			removed: false
		};
	
	}

	handleClick = () => {
		this.setState({clicked: !this.state.clicked});
	};

	removeItem = () => {
		this.setState({removed: true});
	}


	render() {
		if(this.state.removed){
			return <div></div>;
		}
		else{
            const style = this.state.clicked ? 'completed' : 'notCompleted';
			return (
                <div className={style} onClick={this.handleClick}>{this.state.item}
                <button onClick={this.removeItem}>X</button></div>
			);
		}
	}
}

export default Todo;