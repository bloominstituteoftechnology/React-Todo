import React from 'react'; 
import './Todo.css'; 



class TimerStart extends React.Component {
    constructor(props){
        super(props);
        this.state = {timerCount: this.props.timerCount}; 
    }

    

    render() {

        return (
            <div>
                <button className="timer" onClick = {this.props.handleStart}>Start Pomodoro</button>
                <button className="timer" onClick = {this.props.handleStop}>Stop Pomodoro</button>
                <button className="timer" onClick = {this.props.handleReset}>Reset Pomodoro</button>
                
                
            </div>
        )
    }
}



export default TimerStart; 