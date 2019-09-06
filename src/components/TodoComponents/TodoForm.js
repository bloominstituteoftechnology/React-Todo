import React from "react";



class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      itemName: " "
    };
  }
  handleChanges = e => {
    
    this.setState({ itemName: e.target.value });
    console.log("from todoform HandleChanges",this.state.itemName);
  };

  handleSubmit = e => {
    this.props.addItem(e, this.state.itemName);
    this.setState({ itemName: "" });
  };
  

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
         <input
          type="text"
          name="item"
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
