// @ts-check

import React from "react";

const BoilingWater = (props) => <div>Is the water boiling with this temperature? Answer: {props.temperature >= 100 ? 'YES': 'NO'}</div>;

class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onChange(e);
    }
    render(){
        return (
            <fieldset>
                <legend>Temperature ({isCelsius(this.props.temperatureUnit)? "°C" : "°F"}): </legend>
                <input value={this.props.temperature} onChange={this.handleChange}/>
    
            </fieldset>
        );
    }
    
}

const CELSIUS = 'C';
const FAHRENHEIT = 'F';

export default class TemparatureManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: 0,
            temperatureUnit: CELSIUS            
        };
        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
        
    }
    handleCelsius(e){
        this.setState({temperature: parseFloat(e.target.value), temperatureUnit: CELSIUS});
    }
    handleFahrenheit(e){
        this.setState({temperature: parseFloat(e.target.value), temperatureUnit: FAHRENHEIT});
    }
    render(){
        const temperature = this.state.temperature;
        const celsiusTemp = isCelsius(this.state.temperatureUnit) ? temperature: fromFahrenheitToCelsius(temperature); 
        const fahrenheitTemp = isFarenheit(this.state.temperatureUnit) ? temperature: fromCelsiusToFahrenheit(temperature); 
        return(
            <div>
                <TemperatureInput temperatureUnit={CELSIUS} temperature={celsiusTemp} onChange={this.handleCelsius}/>
                <TemperatureInput temperatureUnit={FAHRENHEIT} temperature={fahrenheitTemp} onChange={this.handleFahrenheit}/>
                <BoilingWater temperature="50"/>
            </div>
        );
    }
}
const isCelsius = u => u === CELSIUS;
const isFarenheit = u => u === FAHRENHEIT;

const fromFahrenheitToCelsius = (d) => (d - 32) * 5 / 9;
const fromCelsiusToFahrenheit = (d) => (d * 9 / 5) + 32;
//const convert = (temp, unit) => (unit === "C") ?  ;