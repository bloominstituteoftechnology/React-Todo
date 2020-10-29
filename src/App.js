import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import "./App.css"

const activities = [
  {
    name:"Learn Adv React",
    id:1,
    completed:false,

  },
  {
    name:"Clean Room",
    id:2,
    completed:false,

  },
  {
    name:"Read",
    id:3,
    completed:false,

  },
  {
    name:"Binge Anime",
    id:4,
    completed:false,

  }
]
class App extends React.Component {

constructor(){
  super();
  this.state={
    activities
  };
}

  toggleCompleted = (activityId)=>{
    console.log("activity id",activityId)
    //setState makes it possible to change the copied state
    this.setState({
      //we are setting up the state so if the state is true it will toggle the state (cross off list)
      ...this.state, activities: this.state.activities.map(activity =>{
        if(activity.id === activityId){
          return{
             ...activity, completed: !activity.completed
        }
      }
      return activity;
     })
    })

  }
  addActivity = activityName =>{
    this.setState({
      activities: [...this.state.activities, {id: Date.now(), name:activityName, completed:false}]
    })
  }

  clearCompleted = () =>{
    this.setState({
      activities: this.state.activities.filter((activity)=> !activity.completed )
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className ="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
          addActivity={this.addActivity}
          />
        </div>

        <br/>
        <div className="activity-list">
          <TodoList 
            activities={this.state.activities}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
          </div>
      </div>
    );
  }
}

export default App;
