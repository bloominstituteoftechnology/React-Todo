import React from "react";
import styled from "styled-components";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemText: ""
    };
  }
  changeHandler = event => {
    this.setState({ itemText: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.itemText);
    this.setState({ itemText: "" });
  };

  render() {
    return (
      <FormDiv onSubmit={this.submitHandler}>
        <input
          type="text"
          name="itemText"
          value={this.state.itemText}
          onChange={this.changeHandler}
          placeholder="...type todo here"
        />
        <StyledButton type="submit">Submit</StyledButton>
      </FormDiv>
    );
  }
}

export default ToDoForm;

const FormDiv = styled.form`
  background: #af5e62;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 5em;
  max-width: 250px;
  padding: 15px;
  margin: 16px auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background: #a4a89f;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 0.75em;
  border: 2px solid #af5e62;
  border-radius: 3px;
`;
