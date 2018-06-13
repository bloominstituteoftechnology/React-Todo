import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
constructor(){
	super();
	this.state={
	list:[  
		  {
              task: 'Take Nap',
              id: 100,
              completed: false,
          },
          {
              task: 'Mow Lawn',
              id: 101,
              completed: false,
          },
          {
              task: 'Fix Fence',
              id: 102,
              completed: false,
          },
          {
              task: 'Take Nap',
              id: 103,
              completed: false,
          }
	],
	newItem:"",
	newTask:[{
		task:''
	}]
	};
}
update = event => {
	this.setState({newItem: event.target.value});
};
addItem = () => {
this.taskCreator(this.newItem);
const newList = this.state.list.splice('');
newList.push(this.state.newTask);
	this.setState({list : newList, newItem : ""});
};
taskCreator= () => {
this.state.newTask.task=this.state.newItem;
}
render(){
return(
<div>
<h2> Todo List: </h2>
<ul>
      {this.state.list.map((list) => <li key={list.id} className={list.completed}>{list.task}</li>)}
</ul>
<input
type="text"
placeholder="add item"
onChange={this.update}
value={this.state.newItem}
/>
<button onClick={this.addItem}>add item</button>
</div>
)
}
};
export default App;
