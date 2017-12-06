import React, { Component } from 'react';
  		  
 class TodoItem extends Component {
 constructor(todoItem) {
 super();
this.state = {		          
todoItem,
clicked:false
};		          
}		      
class Todo extends Component {
const customStyle = this.state.clicked ? {textDecoration:'line-through'} : {textDecoration:'none'};		          const customStyle = this.state.clicked ? {textDecoration:'line-through'} : {textDecoration:'none'};
return (		          
<div style={customStyle} onClick={this.handleClick}>		         
{this.props.title}
{this.props.message}
</div>
);		          
}
}
  		  
export default TodoItem; 