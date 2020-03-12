import React from "react";




class TodoListForm extends React.Component {
  constructor(props) {
      super(props);
      this.state ={
          itemName: ""
      };
  }


  handleChanges = e => {
      this.setState({ itemName: e.target.value});
  }

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
            />
            <button>Add</button>
        </form>
    );
}


}


export default TodoListForm;