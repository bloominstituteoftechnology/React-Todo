import React from 'react';

class App extends React.Component {
 

  constructor() {
    super();
  }

  completedStyle(){
    if(this.props.task.completed){
        return "finished";
    }

    return "is my new task";
  }

  render() {

    let taskName = this.props.task.task + " - " + this.completedStyle()
    return (
      <div onDoubleClick={() => {console.log("onDoubleClick working"); this.props.setCompleted(this.props.task)}}  >
          {taskName}
      </div>
    );
  }
}

export default App;