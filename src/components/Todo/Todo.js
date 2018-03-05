import React, { Component } from 'react';

class Todo extends Component {

  constructor() {
    super();
    console.log("Emply Constructor");
  }

  render(){
    const style = {
      textDecoration: (this.props.completed === true) ? "line-through" : "none"
    };
    const TodoItemToggleClass = (this.props.completed === true) ? "Todo__item Todo__item--completed" : "Todo__item";
    return (
      <div className={TodoItemToggleClass}>
        <div className="Todo__text" style={style} data-index={this.props.index} onClick={() => { this.props.onClick(this.props.index); }}>
          <span className="Todo__index">{this.props.index + 1}. </span>{this.props.todo}
        </div>
        <div className="Todo__delete-icon" onClick={() => { this.props.onDelete(this.props.index); }}>X</div>
      </div>
    );
  };

}

export default Todo;