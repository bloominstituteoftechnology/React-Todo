import React from 'react';

class App extends React.Component {
constructor(){
super();
this.state={
	todos:[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
],
todo:''
}
};
//every letter typed updates the string todo
updateTodo = update => {
	this.setState({todo:update.target.value});
}
//makes a copy of todo list, pushes the new todo onto the list,
//setting the task as the string, id as random, completed defaults to false,
//then updates the state of todo list with the new list
newTodo = () => {
	let newList = this.state.todos.slice();
	newList.push({task : this.state.todo, completed:false, id:new Date()});
	this.setState({todos:newList,todo:''})
}
// the ul part maps over todo, setting id as the key, class as list_item, completed as a sibling selector,
// and task as the innerHTML text. 
  render() {
    return (
      <div>
        <ul>
		 {this.state.todos.map((list) => <li key={list.id} className={`${'list_item'} ${list.completed.toString()}`}>{list.task}</li>)}
		</ul>
		<input
        type = "text"
        placeholder = "Add todo"
		onChange = {this.updateTodo}
        value = {this.state.todo}
        />
		<button onClick={this.newTodo}>Add to the list</button>
      </div>
    );
  }
}

export default App;
