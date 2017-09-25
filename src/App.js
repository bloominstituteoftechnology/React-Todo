import React, {Component} from 'react';
import Task_Controller from './Task_Controller';
import Nav_Bar from './Nav_Bar';

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <div id="bg_image"><img width="100%" src={"./src/Assets/MyTasks.png"}/></div>
                <Nav_Bar />
                <br/>   
               <Task_Controller />
               <br/>
               <div></div>
               <div id="footer"><p>© Copyright Track Seven Entertainment & Designs</p></div>
            </div>
        );
    }
}
export default App;