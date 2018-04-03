import React from 'react';
import Input from './components/input';
import List from './components/list';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listItem: "",
      list: ["hello", "world"]
    };
  }

  strike = (e) => {
    const ele = e.target;
    ele.classList.toggle('strike');
  }

  handleAddItem = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitItem = () => {
    const {list} = this.state;
    list.push(this.state.listItem);
    this.setState({list, listItem: "" });
  }

  render() {
    return (
      <div class="Container">
        <h2>Todo App</h2>
        <Input style='input' method={this.handleAddItem} {...this.state}/>
        <button onClick={this.handleSubmitItem}>add new item</button>
        <List  method={this.strike}{...this.state} />
      </div>
    );
  }
}
