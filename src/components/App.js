// React, Component
import React, { Component } from 'react';
// render
import { render } from 'react-dom';
// List switcher
import ListSwitch from './ListSwitch';
// List
import List from './List';
// Form controls
import FormControl from './FormControl';
// Visual Feedback
import ListContext from './ListContext';
// New List Menu
import NewListMenu from './NewListMenu';

class App extends Component {
  constructor() {
    super();
    let storedLists = window.localStorage.getItem('lists');
    if (storedLists !== null) storedLists = JSON.parse(storedLists);

    this.state = {
      lists: storedLists || [
        {name: 'default', icon: 'list', colors: {background: '#fff', forground: '#000', accent: '#000'}, items: [{name: 'banana', checked: false}, {name: 'strawberry', checked: true}]},
        {name: 'test', icon: 'list', colors: {background: '#fff', forground: '#000', accent: '#000'}, items: []}
      ],
      currentList: 'default',
      currentListIndex: 0,
      showNewListMenu: false,
      width: window.innerWidth,
      height: window.innerHeight,
      editList: null,
      localStorage: {
        link: window.localStorage,
        lastFetch: storedLists
      }
    };
  }

  // Code for Visual
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.localStorage.link.setItem('lists', JSON.stringify(this.state.lists));
  }

  // Add Event Listener
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  // Remove event listener
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  // Code for App
  switchToList(name, id) {
    this.setState({currentList: name, currentListIndex: id});
  }

  listItemEventHandler(liIndex) {
    const lIndex = this.state.currentListIndex;
    this.setState((state) => {
      let l = state.lists;
      l[lIndex].items[liIndex].checked = !l[lIndex].items[liIndex].checked;
      return ({
        lists: l
      });
    });
  }

  addListItem(listItemText) {
    let lc = this.state.lists.map((list, i) => {
      if (i === this.state.currentListIndex) {
        list.items.push({name: listItemText, checked: false});
      }
      return list;
    });
    this.setState({lists: lc});
  }

  removeListItem(listItemIndex) {
    let lists = this.state.lists;
    const removed = Array.prototype.splice.call(lists[this.state.currentListIndex].items, listItemIndex, 1);
    this.setState({lists: lists});
  }

  addList(listName, listIcon, listColors) {
    const olda = this.state.lists;
    const newa = olda.concat([{name: listName, icon: listIcon, colors: listColors, items: []}]);
    this.setState({lists: newa, showNewListMenu: false});
  }

  removeList(listId) {
    console.log(listId);
  }

  getListByIndex(i) {
    return this.state.lists[i];
  }

  setList(listIndex, listName, listIcon, listColors) {
    if (this.state.lists[listIndex]) {
      const lists = this.state.lists;
      lists[listIndex].name = listName;
      lists[listIndex].icon = listIcon;
      lists[listIndex].colors = listColors;
      this.setState({lists: lists});
    }
    if (listIndex === this.state.currentListIndex) this.state.currentList = listName;
  }

  editList(listIndex) {
    this.toggleNewListMenu(listIndex);
  }

  editCurrentList(event) {
    event.preventDefault();
    this.editList(this.state.currentListIndex);
  }

  toggleNewListMenu(listIndex = null) {
    if (listIndex === null) {
      this.setState({showNewListMenu: !this.state.showNewListMenu});
    } else {
      this.setState({editList: listIndex, showNewListMenu: !this.state.showNewListMenu});
    }
  }

  render() {
    return (
      <div>
        <ListContext listName={this.state.currentList}
          listIcon={this.state.lists[this.state.currentListIndex].icon}
          editList_eventHandler={this.editCurrentList.bind(this)} />
        <NewListMenu show={this.state.showNewListMenu}
          listAdd_eventHandler={this.addList.bind(this)}
          listRemove_eventHandler={this.removeList.bind(this)}
          toggleElement_eventHandler={this.toggleNewListMenu.bind(this)}
          getList={this.getListByIndex.bind(this)}
          setList={this.setList.bind(this)}
          listIndex={this.state.editList} />
        <ListSwitch lists={this.state.lists.map(list => [list.name, list.items.length, list.icon])}
          switchLists={this.switchToList.bind(this)}
          toggleAddListMenu={this.toggleNewListMenu.bind(this)}
          mobileView={this.state.width < 680} />
        <div>
          <List list_currentList={this.state.lists[this.state.currentListIndex]}
            listItem_eventHandler={this.listItemEventHandler.bind(this)}
            listItem_remove={this.removeListItem.bind(this)} />
        </div>
        <FormControl submitAction={this.addListItem.bind(this)} />
      </div>
    );
  }
}

export default App;
