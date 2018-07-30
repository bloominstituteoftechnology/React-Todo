import React from 'react';
// import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import Search from './components/TodoComponents/Search';
import SimpleStorage from "react-simple-storage"; 
import './app.css';
import TimerStart from './components/TodoComponents/Timer';
import TimerOnScreen from './components/TodoComponents/TimerOnScreen';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {thingsToDo: [], temp: "",  completed: {}, searchText: "", timerCount: 0, so:0, st:0, sm:0, tm:0, items : 0, timerStop: true};
    this.timer = ""; 
  }


  handleChange = event => {
    this.setState(
      {temp: event.target.value}
    )
  }


  handleSearchChange = event => {
    this.setState(
      {searchText: event.target.value}
    );
    
  }


  handleEnter = event => {
    const {thingsToDo} = this.state;
    let count = this.state.count;
    let key = this.state.key;  
    if(event.keyCode === 13 ){ 
      thingsToDo.push({task: this.state.temp, id: Date.now(), completed: false})
      this.setState({thingsToDo:thingsToDo, temp: "", count: count, key: key});
    }

  }

  handleClick = event => {
    
    const {thingsToDo} = this.state;
    thingsToDo.push({task: this.state.temp, id: Date.now(), completed: false});
    this.setState({thingsToDo:thingsToDo, temp: "", items:thingsToDo.length});
  }

  handleLiClick = event => {
    let thingsToDo = this.state.thingsToDo; 
    thingsToDo.forEach( thing => {
      if (thing.task === event.target.innerHTML && thing.completed === false){
        thing.completed = true; 
        event.target.className = "completed";
        
      } else if (thing.task === event.target.innerHTML && thing.completed === true){
        thing.completed = false;
        event.target.className = "unCompleted"; 
      }
      
    });
    this.setState({thingsToDo: thingsToDo, items: thingsToDo.length});
    
     
}

  handleClearClick = () => {
    let thingsToDo = this.state.thingsToDo 
    thingsToDo = thingsToDo.filter( thing => thing.completed === false );
    
    this.setState({thingsToDo: thingsToDo, items: thingsToDo.length}); 
  }

  

  startTimer = () => {
    let value = document.getElementById("minutes");
    // console.log(value); 
    let valueInt = parseInt(value.options[value.selectedIndex].value, 10);
    
    let so = this.state.so; //single ones
    let st = this.state.st; //second tens// 
    let sm = this.state.sm; // single minutes
    let tm = this.state.tm; //tens minutes 
    so++
    if(so === 10){
      st++;
      so = 0; 
    }
    if (st === 6){
      so = 0;
      st = 0;
      sm ++; 
      console.log(parseInt(tm+sm,10), typeof parseInt(tm+sm,10));
    }
    if (sm === 10){
      so = 0; 
      st = 0; 
      sm = 0;
      tm++;
      
      

    }
    if (parseInt(tm+sm , 10) >= valueInt){
      window.clearInterval(this.timer); 
    }
    
    this.setState({
      timerCount: this.state.timerCount + 1, so:so, st:st, sm:sm, tm:tm
    });

    

   }
   
   stopTimer = () =>{
    window.clearInterval(this.timer); 
    let timerStop = true; 
    this.setState({timerStop: timerStop})
    
   }
   resetTimer = () => {
    window.clearInterval(this.timer);
    let timerStop = true; 
    this.setState({so:0, mh:0, st:0, mt:0, sm:0, tm:0, tick:0, timerCount: 0,timerStop: timerStop});
   
   }
   
   handleStartTimer = () => {
    this.timer = window.setInterval(this.startTimer, 1000);
    this.setState({ timerStop: false}); 
   }


  render() {
    let filteredThings = this.state.thingsToDo.filter((thing) => {return thing.task.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1} ); 
    return (
      <div className = "appContainer">
        <SimpleStorage parent={this} />
        <h1>Todo List: {this.state.items} {this.state.items > 1 ? "items" : "item"} remain.</h1>
        <h2>Timer</h2>
        <select name="minutes" id="minutes">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        </select>
        <TimerStart timerCount= {this.state.timerCount} handleStart = {this.handleStartTimer} handleStop = {this.stopTimer} handleReset={this.resetTimer}/>
        <TimerOnScreen secondTens = {this.state.st} secondOnes={this.state.so} msHundreds={this.state.mh} msTens={this.state.mt}
        singleMinute = {this.state.sm} tensMinute = {this.state.tm}/> 
        <ul>  
        {/* //this.state.thingsToDo  */}
          {filteredThings.map(thing => <TodoList thingToDo = {thing.task} handleLiClick = {this.handleLiClick} completed ={thing.completed}
          key={thing.id} /> )}
          {this.state.temp}
        </ul>
        <Todo handleClick = {this.handleClick} handleenter = {this.handleEnter} value={this.state.temp}
         onChange={this.handleChange}  handleClearClick = {this.handleClearClick} 
         />
        <Search onChange={this.handleSearchChange} value={this.state.searchText}/>
        
      </div>
    );
  }
}

export default App;
