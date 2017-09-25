// React, Component
import React, { Component } from 'react';
// render
import { render } from 'react-dom';
// fontawesome
const FontAwesome = require('react-fontawesome');

class FormControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ''
    };
  }

  catchFormSubmit(event) {
    // Prevent default event
    event.preventDefault();
    // copy item for working with.
    const item = this.state.newItem;
    // is it an empty value?
    if (item === '') return;
    // should visualize an error message to the user
    // ...
    // else
    // reset state
    this.setState({newItem: ''});
    // pass up to callback
    this.props.submitAction(item);
  }

  catchItemText(event) {
    // Prevent default
    event.preventDefault();
    // set state with change
    this.setState({newItem: event.target.value});
  }

  render() {
    return (
      <div className="controls">
        <form onSubmit={this.catchFormSubmit.bind(this)}>
          <input type="text" placeholder="Add an item" value={this.state.newItem} onChange={this.catchItemText.bind(this)} />
          <button className='btn-submit'>
            <FontAwesome size='2x' name='plus-square' alt='Add To List' />
          </button>
        </form>
      </div>
    );
  }
}

export default FormControl;
