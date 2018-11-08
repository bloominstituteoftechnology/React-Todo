import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

  const listData = [
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
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      itemList: listData,
      inputText: '',
    }
  }

  handleChange = ev =>{
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  addTodo = ev =>{
    ev.preventDefault();
    if(!(this.state.inputText === '')){
      this.setState({
        itemList:[
          ...this.state.itemList,
          {task: this.state.inputText, id:Date.now(), completed:false,}
        ],
        inputText: '',
      });
    }
  };

  todoCompleted = ev =>{
    let currentObj = {};
    let currentIndex = 0;
    let tempList = this.state.itemList.slice();
    this.state.itemList.forEach( (item,index) =>{
      if(+ev.target.id === item.id){
        currentObj =item;
        currentIndex = index;
        if(currentObj.completed){
          currentObj.completed = false;
          ev.target.className = "";
        }else{
          currentObj.completed = true;
          ev.target.className = "completed";
        }
        tempList[currentIndex] = currentObj;
      }
    });
    this.setState({
        itemList: tempList
    })
  }

  clearCompleted = ev =>{
    let indexArr = [];
    let tempList = this.state.itemList.slice();
    for(let i = 0; i<tempList.length;){
      if(tempList[i].completed){
         
          indexArr.push(i);
          tempList.splice(i, 1); 
          i=0;
          console.log(i);
          console.log(tempList);  
      }else{
        i++;
      }
    }
    this.setState({
      itemList: tempList
  });
  }


  render() {
    return (
      <div className="App">
      <h1>Todo List</h1>
        <TodoList itemList={this.state.itemList} todoCompleted={this.todoCompleted}/>
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  };
}

export default App;
