import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

export default class CelsiusToKelvin extends Component {
    state = {
        celsius: 0,
        kelvin: 0,
        modalIsOpen: false
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
        // const kelvin = parseFloat(this.state.celsius) + 273.15;
        // this.setState({
        //     kelvin
        // });
        this.setState({
            modalIsOpen: true
        });
    };
    closeModal = () => {
        this.setState({
            modalIsOpen: false
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
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>{`${this.state.celsius} celsius = ${this.state.kelvin} kelvin`}</h2>
                </Modal>
            </div>
        );
    }
}
