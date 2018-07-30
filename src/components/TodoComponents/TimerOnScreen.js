import React from 'react'; 
import './Todo.css'; 

class TimerOnScreen extends React.Component {
    constructor(){
        super()
        this.state = {}
    }
      

    render () {
        return (
            <div className="digits">
            <br/>
                <div>{this.props.timerCount}</div>
                
                <div className="digit" id="tensMinute">{this.props.tensMinute}</div>
                <div className="digit" id="singleMinute">{this.props.singleMinute}</div>
                <div className="digit" id="colon">:</div>
                <div className="digit" id="secondTens">{this.props.secondTens}</div>
                <div className="digit" id="secondOnes">{this.props.secondOnes}</div>
                {/* <div className="digit" id="colon">:</div> */}
                {/* <div className="digit" id="msHundreds">{this.props.msHundreds}</div>
                <div className="digit" id="msTens">{this.props.msTens}</div> */}
            </div>
            
        );
    }
}

export default TimerOnScreen; 