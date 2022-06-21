import React from "react";
import Clock from "./modernClock";

class Controls extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    render() {
        return (
            <>
                <button onClick={ ()=> this.setState({active: !this.state.active}) }>
                    { this.state.active ? "On" : "Off" }
                </button>
                { this.state.active ?
                    <Clock /> :
                    <h2>Clock off</h2>
                }
            </>
        );
    }
}

export default Controls;