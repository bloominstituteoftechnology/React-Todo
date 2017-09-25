// React, Component
import React, { Component } from 'react';
// render
import { render } from 'react-dom';
// fontawesome
const FontAwesome = require('react-fontawesome');

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      index: props.index,
      checked: props.checked,
      liEventHandler: props.onChange,
      removeItemHandler: props.removeItemHandler
    };
  }

  componentWillReceiveProps(newProps){
    this.setState({
      name: newProps.name,
      index: newProps.index,
      checked: newProps.checked,
      removeItemHandler: newProps.removeItemHandler
    });
  }

  handleChange(event) {
    this.state.liEventHandler(event.target.value);
  }

  handleRemove(event) {
    event.preventDefault();
    this.state.removeItemHandler(this.state.index);
  }

  render() {
    return (
      <li key={this.props.index}>
        <a href="#" onClick={this.handleRemove.bind(this)}>
          <FontAwesome className='super-crazy-colors' size='lg' name='trash' />
        </a>
        <label htmlFor={this.props.index}>
          <input id ={this.props.index} label={this.props.index} type="checkbox" value={this.props.index} checked={this.props.checked} onChange={this.handleChange.bind(this)} />
          <h2 className={(this.state.checked) ? 'checked' : 'unchecked'}>{this.props.name}</h2>
        </label>
      </li>
    );
  }
}

export default ListItem;
