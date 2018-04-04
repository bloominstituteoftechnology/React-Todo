import React from "react";

// renders individual todo items
// const ToDo = props => {
//   // console.log(props);
//   return (
//     <div>
//       {/* <p>{props.todoList}</p> */}
//       {props.todoList.map((item, index) => (
//         <div key={item + index} style={{color: 'blue'}} onClick={this.handleCompleteTodo}> {item} </div>
//       ))}
//     </div>
//   );
// };

class ToDo extends React.Component {
	 // strikesthrough a completed todo item
	 constructor(props) {
	 	super();
	 	this.state ={
	 		isComplete: false,
 		  handleCompleteTodo: (event) => {
 		  	console.log('before: ', this.state.isComplete);
		  	if (this.state.isComplete) {
		  		event.target.style.textDecoration = "none";
		  		// a completed item becomes unfinished when clicked
		  		this.state.isComplete = false;
		  	} else {
		  		event.target.style.textDecoration ="line-through";
		  		// a unfinished item becomes finished when clicked
		  		this.state.isComplete = true;
		  	}
		  	// console.log('made it');
		  	console.log('after: ', this.state.isComplete);
 			}
	 	}
	 }

	render() {
		// console.log('hello');
		// console.log(this.state);
		// console.log(this.props);
		return (
	    <div>
	      {this.props.todoList.map((item, index) => (
	        <div key={item + index} onClick={this.state.handleCompleteTodo}> {item} </div>
	      ))}
	    </div>
		);
	}
}

export default ToDo;
