import React, { Component } from "react";

class ItemToDo extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log("props: ", this.props);
    const styles = this.state.clicked
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
    return (
      <div style={styles} onHover={this.handleClick} onClick={this.handleClick}>
        {this.props.thing}
      </div>
    );
  }
}

export default ItemToDo;
