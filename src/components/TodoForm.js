import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import TodoStyle from "./TodoStyle.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeHandler = event => {
    this.setState({
      userItem: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.userItem);
    this.setState({ userItem: "" });
  };

  render() {
    const objectLength = Object.keys(this.props.itemData).length;
    return (
      <Form onSubmit={this.submitHandler}>
        <Form.Field>
          <label>Add Item:</label>
          <Input
            type="text"
            placeholder="Item Name"
            name="userItem"
            value={this.state.userItem}
            onChange={this.changeHandler}
          />
        </Form.Field>
        {objectLength > 0 && (
          <p className="checkedOff">Click on item to check off list!</p>
        )}
        <Button type="submit" color="teal">
          Submit
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
