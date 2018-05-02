# REACT II

Component is our base class when working with ReactJS.

Creating a class component works as following:

```js
class Harry extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return <h1>Welcome to Harry Potter
    }
}

export default Harry;
```
## "State" is an object that contains the data that our app can access and is also used to cache input from the users side.

An app that contains a state is called a stateful application. 
It is writte in ES6 class syntax.

### Controlled vs Uncontrolled input fields

The former updates in real time (onChange) while the latter one is will only trigger on completed input (button press, enter key f.e.)

Controlled Inputs you will find almost exclusively in class components where they are usually implemented as a state. In addition there will be a callback handling the change to the input field

##### Fazit:
Inputs w/ uncontrolled values are a very basic form of input fields and don't offer much in terms of features. They are used if ReactJS is not available and / or there are conflicts with other libraries.

Controlled values are used to be able to give instant feedback to the user (f.e. great solution to check if criteria for PW creation are met or field got filled out correctly). However, they require a lot more work to setup (part of a class component, require callbacks that are themselves class components too)