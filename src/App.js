import React, { Component } from "react";
import { render } from "react-dom";
import ItemsList from "./ItemsList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newListItem: "",
      listItems: []
    };
  }

  addListItem = e => {
    this.setState({ [e.target.name]: e.target.value});
  };
  pushListItems = () => {
    const { listItems } = this.state;
    listItems.push(this.state.newListItem);
    this.setState({ listItems, newListItem: ""});
  };
 
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center', flexDirection: 'column', textAlign: 'center'}}>
    <h2 style={{fontSize: 40}}>To Do List:</h2>
    <div style={{fontSize: 40}}>
    <ItemsList {...this.state} />
    </div>
    <input
    style={{height: 40, textAlign: 'center'}}
    type="text"
    name="newListItem"
    value={this.state.newListItem}
    placeholder="Add a to do item"
    onChange={this.addListItem}
    />
    <button onClick={this.pushListItems}>Add Item</button>
  </div>
    )};
}


render(<App />, document.getElementById("root"));
export default App;
