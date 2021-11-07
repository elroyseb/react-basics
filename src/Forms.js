// @ts-check

import React
 from "react";
class CountryForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {country: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({country: event.target.value});
    }

    handleSubmit(event){        
        alert("You live in " + this.state.country);
        event.preventDefaut();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Country:
                    <input type="text" value={this.state.country} onChange={this.handleChange} />
                </label>
                
                <input type="submit" value="Submit"/>
            </form>
        );
    }
        
}

export default CountryForm; 