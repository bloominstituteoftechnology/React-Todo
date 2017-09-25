import React, {Component} from 'react';

class Nav_Bar extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="nav_bar">
               <div id="nav_logo"><img width="100%" src={"./src/Assets/MyTasks.png"}/></div>
               <div id="nav_welcome"><img width="100%" src={"./src/Assets/Welcome.png"}/></div>
               <div id="nav_version">version:1.0</div>
            </div>    
        );
    }
}
export default Nav_Bar;