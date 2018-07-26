import React, { Component } from "react";

export default class KelvinToCelsius extends Component {
    state = {
        celsius: 0,
        kelvin: 0
    };
    componentDidMount() {
        const celsius = parseFloat(this.state.kelvin) - 273.15;
        this.setState({
            celsius
        });
    }
    handleInputChange = event => {
        const kelvin = event.target.value;
        const celsius = parseFloat(kelvin) - 273.15;
        this.setState({
            celsius,
            kelvin
        });
    };
    convert = e => {
        e.preventDefault();
        const celsius = parseFloat(this.state.kelvin) - 273.15;
        this.setState({
            celsius
        });
    };
    render() {
        return (
            <div className="container">
                <h1>Convert to Celsius</h1>

                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.kelvin}
                            onChange={this.handleInputChange}
                        />
                        <button type="submit" className="btn btn-primary" onClick={this.convert}>
                            Convert
                        </button>
                    </div>
                </form>
                <h1>{`Kelvin value is: ${this.state.celsius}`}</h1>
            </div>
        );
    }
}
