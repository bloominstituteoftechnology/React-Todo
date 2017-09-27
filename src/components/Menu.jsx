import React from 'react';

require('./styles/Menu.scss');

export default class Menu extends React.Component {
  static get defaults() {
    return {
      username: 'unknown user',
      status: 'student????',
      portrait: './src/res/images/users/default.png',
      logo: './src/res/images/logo.png'
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.state._username = props.username || Menu.defaults.username;
    this.state._userStatus = props.userStatus || Menu.defaults.status;
    this.state._userPortrait = props.userPortrait || Menu.defaults.portrait;
  }

  set username(name) {
    this.state._username = name || Menu.defaults.username;
    this.setState(this.state);
  }
  set userPortrait(path) {
    this.state._userPortrait = path || Menu.defaults.portrait;
    this.setState(this.state);
  }
  set userStatus(status) {
    this.state._userStatus = status || Menu.defaults.status;
  }

  get username() {
    return this.state._username;
  }
  get userPortrait() {
    return this.state._userPortrait;
  }
  get userStatus() {
    return this.state._userStatus;
  }

  render() {
    return (
      <div className="menu">
        <div className="menu top">
          <Logo />
          <User portrait={this.userPortrait} username={this.username} status={this.userStatus} />
          <button className="signout"> sign out </button>
        </div>
        <div className="menu bottom">
          <hr />
          {this.state.children}
        </div>
      </div>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <img className="logo" src={Menu.defaults.logo} alt="logo" />
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <img className="user portrait" src={this.props.portrait} alt="user-portrait" />
        <h5 className="user name"> {this.props.username} </h5>
        <h6 className="user status"> {this.props.status} </h6>
      </div>
    );
  }
}
