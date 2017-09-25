// React, Component
import React, { Component } from 'react';
// render
import { render } from 'react-dom';
// fontawesome
const FontAwesome = require('react-fontawesome');

class ListSwitch extends Component {
  constructor(props) {
    super();
    this.state = {
      switchMethod: props.switchLists,
      lists: props.lists,
      iconPlaceholder: 'list'
    };
  }

  switchToList(e) {
    e.preventDefault();
    this.state.switchMethod(this.state.lists[Number(e.target.dataset.id)][0], Number(e.target.dataset.id));
  }

  componentWillReceiveProps(newProps){
    this.setState({
      switchMethod: newProps.switchLists,
      lists: newProps.lists
    });
  }

  render() {
    return (
      <nav className={this.props.mobileView ? 'list-switch icon-view' : 'list-switch'}>
        {this.state.lists.map((list, i) => {
          return (
            <a href="#" data-id={i} key={i} onClick={this.switchToList.bind(this)}>
              {(!this.props.mobileView) ? <FontAwesome className='list-icon' name={list[2]} /> : <FontAwesome className='list-icon' size='2x' name={list[2]} />}
              {(!this.props.mobileView) ? list[0] : ''}
              <em data-id={i}>{list[1]}</em>
            </a>
          );
        })};
        <a href="#" className="button-icon" onClick={this.props.toggleAddListMenu}>
          <FontAwesome className='list-icon' size='2x' name='plus-circle' />
        </a>
      </nav>
    );
  }
}

export default ListSwitch;
