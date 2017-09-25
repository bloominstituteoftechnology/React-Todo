// React, Component
import React, { Component } from 'react';
// render
import { render } from 'react-dom';
// list item
import ListItem from './ListItem';
// Empty List placeholderImage
import EmptyListPlaceholder from './EmptyListPlaceholder';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.list_currentList.name,
      list: props.list_currentList.items,
      liEventHandler: props.listItem_eventHandler,
      removeItemHandler: props.listItem_remove,
      randomMessage: 'This is not the list you are looking for',
      icon: 'question'
    };
  }

  componentWillReceiveProps(newProps){
    this.setState({
      name: newProps.list_currentList.name,
      list: newProps.list_currentList.items,
      liEventHandler: newProps.listItem_eventHandler,
      removeItemHandler: newProps.listItem_remove
    });
  }

  // switchToList(name, id) {
  //   console.log(name, id);
  //   this.setState({currentList: name, currentListIndex: id});
  // }

  render() {
    if (this.state.list.length === 0) {
      return (
        <ul className="list">
          <EmptyListPlaceholder text={this.state.randomMessage} icon={this.state.icon} />
        </ul>
      );
    } else {

      return (
        <ul className="list">
          {this.state.list.map((item, i) => {
            return <ListItem key={i} index={i} name={item.name} checked={item.checked} removeItemHandler={this.state.removeItemHandler} onChange={this.state.liEventHandler} />;
          })}
        </ul>
      );
    }
  }
}

export default List;
