import React, { Component } from 'react'
import Temperature from './Temperature';


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
 class Caculator extends Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
      }
    
      handleCelsiusChange(temperature) {
        this.setState({temperature, scale: 'c' });
      }
    
      handleFahrenheitChange(temperature) {
        this.setState({temperature, scale: 'f'});
      }
    
      render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    
        return (
          <div>
            <Temperature
              scale="c"
              temperature={celsius}
              onTemperatureChange={this.handleCelsiusChange} />
            <Temperature
              scale="f"
              temperature={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange} />            
          </div>
        );
      }
}
export default Caculator