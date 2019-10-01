// import React from "react";

// class TodoForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       item: ""
//     };
//   }

//   handleChanges = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   submitItem = e => {
//     e.preventDefault();
//     this.setState({ item: "" });
//     this.props.addItem(this.state.item);
//   };



//   render() {
//     return (
//       <form onSubmit={this.submitItem}>
//         <input
//           type="text"
//           value={this.state.item}
//           name="item"
//           onChange={this.handleChanges}
//           placeholder="...todo"
//         />
//         <br />
//         <button type="submit">Add Todo</button>
      
//       </form>
//     );
//   }
// }

// export default TodoForm;
import React from "react";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handlesubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({
      newItem: ""
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="add to do"
            name="newItem"
            value={this.newItem}
          />
          <button type="submit">add todo</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;