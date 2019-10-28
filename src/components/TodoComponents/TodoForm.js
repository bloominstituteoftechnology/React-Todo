import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
  // add a state property called "newItem"
  // set the value of "this.state.newItem" to an empty string
  constructor() {
    super();
    // const [newItem, setNewItem] = useState('');
    this.state = {
      newItem: '',
      moreStateProperties: 9,
      evenMore: { name: 'Dustin' }
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
    console.log("it's working!");
    // add our typed in item to the grocery list!
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: '' });
  };

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <label htmlFor="item">Need Some Do's Did?</label>
        <input
          type="text"
          placeholder= "Put your do here"
          name="item"
          id="item"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add The Do</button>
      </form>
    );
  }
}

export default TodoForm;