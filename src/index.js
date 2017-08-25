/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
// import List from './components/list';
import ToDoInput from './components/toDoInput';

// CSS
const div_css = {
  textAlign: 'left'
};
const h1_css = {
  fontFamily: 'Josefin Slab, serif',
  fontSize: '100px',
  fontWeight: '100',
  height: '60px',
  color: 'rgba(175, 47, 47, 0.15)'
};
const ul_css = {
  listStyle: 'none',
  fontFamily: 'Open Sans, Helvetica Neue, Helvetica, sans-serif',
  fontSize: '14px',
  lineHeight: '2em',
  color: '#4d4d4d',
  margin: 0,
  paddingLeft: 10,
  paddingBottom: 20
};
const li_css = {
  borderBottom: 'thin dotted #ddd'
};

// Class Component
class App extends React.Component {
  constructor() {
    super();
    // this.state.toDoList is an empty array
    this.state = { toDoList: [] };
    this.onSave = this.onSave.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentWillMount() {
    this.setState({
      toDoList: [
        'water the dog',
        'drop the plants off at school',
        'walk the milk',
        'buy kids'
      ]
    });
  }
  onSave(text) {
    this.setState({
      toDoList: [...this.state.toDoList, text]
    });
  }
  onClick(i) {
    console.log(`Deleting: ${this.state.toDoList[i]}`);
    const newList = this.state.toDoList.slice();
    newList.splice(i, 1);
    this.setState({ toDoList: newList });
  }
  render() {
    const listItems = [];
    const items = this.state.toDoList;
    items.forEach((item, i) =>
      listItems.push(
        <li
          style={li_css}
          key={item.toString()}
          onClick={() => this.onClick(i)}
        >
          {item}
        </li>
      )
    );
    return (
      <div style={div_css}>
        <h1 style={h1_css}>to_do</h1>
        <ul style={ul_css}>
          {listItems}
        </ul>
        <ToDoInput onSave={this.onSave} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
