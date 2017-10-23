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
        
    }

handleToDoList(event) {
    this.setState({ ListItem: event.target.value });
}
render() {
    return (
       <List
       handleToDoList = {this.handleToDoList(this)}
       ListItem = {this.ListItem}
       handleAddItemToList = {this.handleAddItemToList(this)}
       ToDoList = {this.ToDoList}
        />
    )
};
handleAddItemToList() {
    this.state.ToDoList.push(this.state.ListItem);
    this.state({ ToDoList: this.state.ToDoList, ListItem: ''});    
}
}
const App = () => (
   /* Replace this div with whatever components you want the App root component to render */
   <div>{ToDo}</div> 
);

const List = props => {
    return (
        <div>
            <input type='text' value={props.ListItem} onChange={props.handleToDoList} />
            <button onClick={props.handleAddItemToList}>Submit Item</button>
            <ul>
                {props.ToDoList.map((foofie, i) => {
                    return <li key={i+1}>{foofie}</li>;
                })}
            </ul>
        </div>
    );
};

render(<App />, document.getElementById('root'));
