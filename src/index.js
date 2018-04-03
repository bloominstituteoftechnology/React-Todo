import React, { Component } from "react";
import { render } from "react-dom";
import AnimalsList from "./ItemsList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      items: [""]
    };
  }

  handleAddItem = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitItem = () => {
    const { items } = this.state;
    items.push(this.state.newItem);
    this.setState({ items, newItem: "" });
  };

  render() {
    return (
      <div style={styles}>
        <h2>My To Do List</h2>
        <AnimalsList {...this.state} />
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          placeholder="add item"
          onChange={this.handleAddItem}
        />
        <button onClick={this.handleSubmitItem}>Add Item</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));





// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import ItemList from "./ItemList";
// import App from './App';

// const styles = {
//     fontFamily: "sans-serif",
//     textAlign: "center"
//   };

//   class ToDo extends Component {
//     constructor() {
//       super();
//       this.state = {
//         newItem: "",
//         item: ["Grocery Shopping", "Trash", "Cook Dinner", "Dance Party"]
//       };
//     }
  
//     handleAddItem = e => {
//       this.setState({ [e.target.name]: e.target.value });
//     };
  
//     handleSubmitItem = () => {
//       const { items } = this.state;
//       items.push(this.state.newItem);
//       this.setState({items, newItem: "" });
//     };
  
//     render() {
//       return (
//         <div style={styles}>
//           <h2>My To Do List</h2>
//           <ItemList {...this.state} />
//           <input
//             type="text"
//             name="newItem"
//             value={this.state.newAnimal}
//             placeholder="add item"
//             onChange={this.handleAddItem}
//           />
//           <button onClick={this.handleSubmitItem}>Add Item</button>
//         </div>
//       );
//     }
//   }

// render(<App />, document.getElementById('root'));
