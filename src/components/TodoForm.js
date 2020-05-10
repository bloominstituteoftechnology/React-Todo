import React from "react";

// tasks
// 1. add constructor with state that has itemName
// 2. on input add avalue attribute and pass new state property
// 3. build a handleChanges action handler that will update the new state
// 4. add onChange

class ListForm extends React.Component {
  // constructor with state
  constructor() {
    super();
    this.state = {
      itemName: ""
    };
  }
};


export default ListForm;