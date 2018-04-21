import React, { Component } from 'react';
import Item from "./Item";

class List extends Component {
	
	constructor() {
		super();
		this.state = {
			reminders:[]
		};
	}

	addReminder = () => {
		this.state.reminders.push(this.props.reminder);
	}
	
	render() {
		{this.addReminder()}
		return (this.state.reminders.map( (e, i) => {
			if(i>0){
				return <Item key={i} reminder={e} />
			}
		}
		));
	}
}

export default List;
