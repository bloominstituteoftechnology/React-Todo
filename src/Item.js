import React, { Component } from 'react';


class Item extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			item:this.props.reminder,
			removed: false
		};
	
	}

	handleClick = () => {
		this.setState({clicked: !this.state.clicked});
	};

	removeItem = () => {
		this.setState({removed:true});
	}


	render() {
		if(this.state.removed){
			return <span></span>;
		}
		else{
			const styles = this.state.clicked ? {backgroundColor:'green',marginBottom:"20px",border:"2px solid black"} : {backgroundColor:'white',marginBottom:"20px",border:"2px dotted black"};
			const buttonStyle = {position:"absolute", left:"300px",borderRadius:"7px"};
			return (
			<div style={styles} onClick={this.handleClick}>
				{this.state.item}
				<button style={buttonStyle} onClick={this.removeItem}>Remove Item</button>
			</div>

			);
		}
	}
}

export default Item;