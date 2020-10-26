import React, {Component} from 'react';
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'
import './components/TodoStyle.css'



const actualList = [
  {
    name: 'workout',
    id:0,
    finished: false
  }
]

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      actualList: actualList
    }
  }

  toggleItem = (itemId)=>{
    this.setState({
      actualList:this.state.actualList.map(item=>{
        if(item.id === itemId){
          return{
            ...item, 
            finished:!item.finished
          }
        }else{
          return item;
        }
      })
    })
  }


  clearItems = () => {
    this.setState({
      actualList:this.state.actualList.filter(item => (!item.finished))
    })
  }

  addItem = (name) => {
    this.setState({
      actualList:[...actualList, {
        name: name,
        id:this.state.actualList.length,
        finished: false
      }]
    })
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
        <h1>Get ur shit done:</h1>
        <ToDoForm handleAddItem={this.addItem}/>
      </div>
        <ToDoList handleClearItems={this.clearItems} handleToggleItem={this.toggleItem} actualList={this.state.actualList}/>
        </div>
    );
  }
}

export default App;







