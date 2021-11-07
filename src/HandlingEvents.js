// @ts-check

import React from "react";

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
   handleClick() {
    this.setState(previousState => ({isToggleOn: !previousState.isToggleOn}));
   }

    render(){
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON": "OFF"}</button>
        );
    }
}

export default ToggleButton;