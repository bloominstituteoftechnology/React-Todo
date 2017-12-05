import React, { Component } from 'react'; 

class classComponentUpdatingState extends Component {
    constructor() {
        super()
        this.state = {
            aNumber: 8
   };
}

increment = () => 
//this.state.aNumber++;
let n = this.state.aNumber;
this.setState( { aNumber: ++n } );
}

decrement = <> == {
//this.state.aNumber--; 
this.setState( { aNumber: --n} );

}
render() {
    return [
        <div>'OurNumber: $(this.state.OurNumber</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>+</button>
        </div>
};
}
}

export default ClassComponentUpdatingState; 