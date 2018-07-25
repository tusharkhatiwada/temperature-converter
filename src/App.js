import React, { Component } from "react";

export default class App extends Component {
    state = {
        celsius: 0,
        kelvin: 0
    };
    componentDidMount() {
        const kelvin = parseFloat(this.state.celsius) + 273.15;
        this.setState({
            kelvin
        });
    }
    handleInputChange = event => {
        const celsius = event.target.value;
        const kelvin = parseFloat(celsius) + 273.15;
        this.setState({
            celsius,
            kelvin
        });
    };
    convert = e => {
        e.preventDefault();
        const kelvin = parseFloat(this.state.celsius) + 273.15;
        this.setState({
            kelvin
        });
    };
    render() {
        return (
            <div className="container">
                <h1>Convert to Kelvin</h1>

                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.celsius}
                            onChange={this.handleInputChange}
                        />
                        <button type="submit" className="btn btn-primary" onClick={this.convert}>
                            Convert
                        </button>
                    </div>
                </form>
                <h1>{`Kelvin value is: ${this.state.kelvin}`}</h1>
            </div>
        );
    }
}
