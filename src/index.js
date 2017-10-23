/*eslint no-unused-vars: "off"*/
import React, {Component} from 'react';
import { render } from 'react-dom';
// You'll want to import the necessary components you want the App component to render
class ToDo extends Component {
    constructor () {
        super();
        this.state = {
            ToDoList: [],
        };
        this.handleToDoList = this.handleToDoList.bind(this);
        this.handleAddItemToList = this.handleAddItemToList.bind(this); 
    }

handleToDoList(event) {
    this.setState({ ListItem: event.target.value });
}
render() {

	console.log(this.state)
    return (
      <List
       handleToDoList = {this.handleToDoList}
       ListItem = {this.state.ListItem}
       handleAddItemToList = {this.handleAddItemToList}
       ToDoList = {this.state.ToDoList}
      />
    )
};
handleAddItemToList() {
    this.state.ToDoList.push(this.state.ListItem);
    this.setState({ ToDoList: this.state.ToDoList, ListItem: ''});    
}
}
const App = () => (
   /* Replace this div with whatever components you want the App root component to render */
   <div>{new ToDo()}</div> 
);

const List = props => {
    return (
        <div>
            <input type='text' value={props.ListItem} onChange={props.handleToDoList} />
            <button onClick={props.handleAddItemToList}>Submit Item</button>
            <ul>
                {props.ToDoList.map((foofie, i) => {
                    return <li key={i+1}><input key={i+1} type="checkbox" />{foofie}</li>;
                })}
            </ul>
        </div>
    );
};
render(<ToDo />, document.getElementById('root'));

