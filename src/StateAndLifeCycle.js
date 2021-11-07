// @ts-check

import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateNow: new Date().toLocaleTimeString()
        }
    }

    handleTime() {
        this.setState({
            dateNow: new Date().toLocaleTimeString() 
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.handleTime(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>{this.state.dateNow}</div>
        );
    }
}

export default Clock;