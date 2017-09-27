import React from 'react';

require('./styles/Expandable.scss');

export default class ExpandableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state._expandTitle = props.expandTitle;
    this.state._position = props.position || 'bottom';
    this.state._onClick = props.onClick;
  }

  set expandTitle(title) {
    this.state._expandTitle = title;
    this.setState(this.state);
  }
  set position(position) {
    this.state._position = position || 'bottom';
    this.setState(this.state);
  }
  get expandTitle() {
    return this.state._expandTitle;
  }

  onClick() {
    this.state._onClick(arguments);
  }

  render() {
    return (
      <More title={this.title} onClick={this.onClick}/>
    );
  }
}

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state._title = props.title || 'More';
  }

  set title(title) {
    this.state._title = props.title || 'More';
    this.setState(this.state);
  }

  get title() {
    return this.state._title;
  }

  render() {
    return (
      <div className="expand">
        <button className="expand button"> {this.title} </button>
      </div>
    );
  }
}
