import React, { Component } from "react";
import { render } from "react-dom";
import AnimalsList from "./AnimalsList";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            newAnimal: "",
            animals: ["Doggos", "Panda Bears", "Mokeys", "Kittens"]
        };
    }

    handleAddAnimal = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmitAnimal = () => {
        const { animals } = this.state;
        animals.push(this.state.newAnimal);
        this.setState({ animals, newAnimal: "" });
    };

    render() {
        return (
            <div style={styles}>
                <h2>Welcome to my List of Animals</h2>
                <AnimalsList {...this.state} />
                <input
                    type="text"
                    name="newAnimal"
                    value={this.state.newAnimal}
                    placeholder="add animal"
                    onChange={this.handleAddAnimal}
                />
                <button onClick={this.handleSubmitAnimal}>Add Animal</button>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
