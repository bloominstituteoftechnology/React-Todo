// React, Component
import React, { Component } from 'react';
// render
import { render } from 'react-dom';
// fontawesome
const FontAwesome = require('react-fontawesome');

class NewListMenu extends Component {
  constructor(props) {
    super(props);
    let listObj = null;
    if(props.listIndex !== null) {
      listObj = props.getListByIndex(props.listIndex);
    }

    this.state = {
      listText: '',
      icon: 'list',
      colors: {background: '#fff', forground: '#000', accent: '#000'},
      getList: props.getList,
      setList: props.setList,
      listIndex: null
    };
  }

  componentWillReceiveProps(newProps){
    let listObj = null;

    if(typeof newProps.listIndex === 'number') {
      listObj = newProps.getList(newProps.listIndex);
      this.setState({
        listText: listObj.name,
        icon: listObj.icon,
        listIndex: newProps.listIndex
      });
    } else {
      this.setState({
        listText: '',
        icon: 'list'
      });
    }
  }

  textChange(event) {
    // Prevent Default
    event.preventDefault();
    // change state with new value of input form
    this.setState({listText: event.target.value});
  }

  iconChange(event) {
    // Change the state to match chosen icon.
    this.setState({icon: event.target.dataset.icon});
  }

  formSubmit(event) {
    event.preventDefault();
    const curstate = this.state;
    this.setState({listText: '', icon: 'list'});
    if (this.state.listIndex === null) {
      this.props.listAdd_eventHandler(curstate.listText, curstate.icon, curstate.colors);
    } else {
      this.props.setList(this.state.listIndex, curstate.listText, curstate.icon, curstate.colors);
    }
    this.props.toggleElement_eventHandler();
  }

  cancelAction(event) {
    event.preventDefault();
    this.props.toggleElement_eventHandler();
  }

  deleteAction(event) {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <form className={(this.props.show) ? 'NewListMenu show' : 'NewListMenu hide'} onSubmit={this.formSubmit.bind(this)}>
        <label>
          <FontAwesome className='list-icon-choice' size='2x' fixedWidth={true} name={this.state.icon} />
          {(() => {
            if (this.state.listText === '') {
              return (<input type='text' placeholder='Your list name' onChange={this.textChange.bind(this)} />);
            } else {
              return (<input type='text' value={this.state.listText} onChange={this.textChange.bind(this)} />);
            }
          }
          )()}
          <div className='icon-list'>
            <FontAwesome className='list-icon' size='2x' name='list' data-icon='list' onClick={this.iconChange.bind(this)} />
            <FontAwesome className='list-icon' size='2x' name='home' data-icon='home' onClick={this.iconChange.bind(this)} />
            <FontAwesome className='list-icon' size='2x' name='heart-o' data-icon='heart-o' onClick={this.iconChange.bind(this)} />
            <FontAwesome className='list-icon' size='2x' name='bomb' data-icon='bomb' onClick={this.iconChange.bind(this)} />
            <FontAwesome className='list-icon' size='2x' name='calendar' data-icon='calendar' onClick={this.iconChange.bind(this)} />
            <FontAwesome className='list-icon' size='2x' name='check' data-icon='check' onClick={this.iconChange.bind(this)} />
            <FontAwesome className='list-icon' size='2x' name='child' data-icon='child' onClick={this.iconChange.bind(this)} />
            <FontAwesome className='list-icon' size='2x' name='money' data-icon='money' onClick={this.iconChange.bind(this)} />
          </div>
          <input type='submit' value='Save' />
          <button className='btn-cancel' onClick={this.cancelAction.bind(this)}>Cancel</button>
          <button className='btn-delete' onClick={this.deleteAction.bind(this)}>Delete</button>
        </label>
      </form>
    );
  }
}

export default NewListMenu;
