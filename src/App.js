import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';

let storage = window.localStorage;
let storageList = [];
if (storage.list !== undefined){
	storageList = JSON.parse(storage.list);
}

class App extends React.Component {
constructor() {
  super();
  this.state = {todo: storageList, current: ''}
}

handleInputChange = event => {
  this.setState({current: event.target.value});
}

addTodo = (event, prevState) => {
  event.preventDefault();
  let clear = document.querySelector('.toDoForm input');
  clear.value = '';
  let newList = this.state.todo.slice();
  let newItem = {task: this.state.current, id: Date.now(), completed: false};
  newList.push(newItem);
  this.setState({todo: newList, current: ''});
  storage.setItem('list', JSON.stringify(newList));
}


completeTask = event => {
		let newList = this.state.todo.slice();
		for (let todo in newList){
			if (newList[todo].task === event.target.innerText && newList[todo].id === Number(event.target.dataset.id)){
				newList[todo].completed = !newList[todo].completed;
			}
		}
		this.setState({todo: newList});
		storage.setItem('list', JSON.stringify(newList));
	}

removeCompleted = () => {
  let currentList = this.state.todo.slice();
  let newList = currentList.filter(todo => todo.completed === false);
  this.setState({todo: newList});
  storage.setItem('list', JSON.stringify(newList));
}


render() {
  return (
    <div class="container">
      <h1>Oh god another todo list app</h1>
      <TodoList list={this.state.todo} onChange={this.handleInputChange} onSubmitButton={this.addTodo} onClear={this.removeCompleted} completeTask={this.completeTask} />
    </div>
  )
}

}

export default App;
