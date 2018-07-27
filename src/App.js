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
    this.state = {thingsToDo: [], temp: "",  completed: {}, searchText: "", timerCount: 25, so:0, mh:0, st:0, mt:0, sm:0, tm:0, intervalID:20 };
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
    this.setState({thingsToDo:thingsToDo, temp: ""});
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
    this.setState({thingsToDo: thingsToDo});
    
     
}

  handleClearClick = () => {
    let thingsToDo = this.state.thingsToDo 
    thingsToDo = thingsToDo.filter( thing => thing.completed === false );
    
    this.setState({thingsToDo: thingsToDo}); 
  }

  handleTimerStart = () => {
    let timerCount = 10000;
    console.log("clicked");
    

    
    this.setState({timerCount: timerCount}); 
  }

  startTimer = () => {
    let mh = this.state.mh;
    let mt = this.state.mt;
    let so = this.state.so;
    let st = this.state.st;
    let sm = this.state.sm;
    let tm = this.state.tm;
    mh++; 
    if(mh ===10){
        mh = 0; 
        mt++; 
    }
   if (mt === 10){
       mt = 0; 
       so++;
   }
   if(so === 10){
       so = 0;
       st++;
   }
   
//    msHundreds.innerHTML = mh;
//    msDigits.innerHTML = mt;
//    secondOnes.innerHTML = so; 
//    secondTens.innerHTML = st;
   if (st === 1){
    //    digitsClass.style.color = "Red";
        this.stopTimer(); 
    }

    this.setState({mh:mh, so:so, st:st, mt:mt})

   }
   
   
   stopTimer = () =>{
    clearInterval(this.state.intervalID); 
    
   }
   resetTimer = () => {
       
       this.setState({so:0, mh:0, st:0, mt:0, sm:0, tm:0});
    //    msHundreds.innerHTML = mh;
    //    msDigits.innerHTML = mt;
    //    secondOnes.innerHTML = so; 
    //    secondTens.innerHTML = st;
   }
   
//    let msDigits = document.querySelector("#msTens"); 
//    let msHundreds = document.querySelector("#msHundreds");
//    let secondOnes = document.querySelector("#secondOnes");
//    let secondTens = document.querySelector("#secondTens"); 
   
//    let so = 0;
//    let mh = 0;
//    let st = 0;
//    let mt = 0;
   //^four variables for each digit. 
   
//    let digitsClass = document.querySelector(".digits"); 
    
   
//    let start = document.createElement("button"); 
//    let stop = document.createElement("button"); 
//    let reset = document.createElement("button");
   
//    let startText = document.createTextNode("Start");//Sets Place for text;
//    let stopText = document.createTextNode("Stop");//Sets Place for text;
//    let resetText = document.createTextNode("Reset");
   
//    start.appendChild(startText);
//    stop.appendChild(stopText); 
//    reset.appendChild(resetText); 
   
//    let body = document.querySelector("body");
//    body.appendChild(start);
//    body.appendChild(stop); 
//    body.appendChild(reset); 
   
//    let buttons = document.querySelectorAll("button");
   
//    let intervalID; 
   
   timerGo = () => {
    let intervalID = this.state.intervalID
    intervalID = window.setInterval(this.startTimer, 10);
    this.setState({intervalID: intervalID}); 
   }
   
//    buttons[0].addEventListener("click", timerGo, false); 
    
//    buttons[1].addEventListener("click", stopTimer, false); 
//    buttons[2].addEventListener("click", resetTimer, false)









  render() {
    let filteredThings = this.state.thingsToDo.filter((thing) => {return thing.task.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1} ); 
    return (
      <div className = "appContainer">
        <SimpleStorage parent={this} />
        <h1>Todo List:</h1>
        <h2>Timer {this.state.timerCount}</h2>
        <TimerStart timerCount= {this.state.timerCount} handleStart = {this.timerGo} handleStop = {this.stopTimer} handleReset={this.resetTimer}/>
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
