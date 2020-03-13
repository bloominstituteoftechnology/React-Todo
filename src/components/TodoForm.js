import React from "react" 

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: ""
    };
  }

  handleChanges = e => {
    
    this.setState({ itemName: e.target.value });
  };

  // class property to submit form
  handleAddItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleAddItem}>
        <input
          type="text"
          name="item"
          value={this.state.itemName}
          onChange={this.handleChanges}
          type="reset          "
          defaultValue="Reset"
        />
        <button>Add</button>
      </form>
    );
  }
}



export default TodoForm;