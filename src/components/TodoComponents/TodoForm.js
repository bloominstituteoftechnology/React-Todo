import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  // add a state property called "newItem"
  // set the value of "this.state.newItem" to an empty string
  constructor() {
    super();
    // const [newItem, setNewItem] = useState('');
    this.state = {
      newItem: ""
    };

    // // explicit binding
    // this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges = e => {
    // update state with each keystroke
    // setNewItem(e.target.value)
    this.setState({
      newItem: e.target.value
    });
  };

  // class method to submit form
  handleSubmit = e => {
    e.preventDefault();

    // add typed in item to the grocery list!
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: "" });
    console.log("it's working!");
  };

  render() {
    console.log("rendering form");
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* This is an uncontrolled component We want it to be controlled by state */}
          <label htmlFor="item">New Task: </label>
          <input
            type="text"
            placeholder="...todo task here"
            name="item"
            id="item"
            value={this.state.newItem}
            onChange={this.handleChanges}
          />
          <button>Add Todo</button>
          <button className="clear" onClick={this.props.clearDone}>
            Clear Completed
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
