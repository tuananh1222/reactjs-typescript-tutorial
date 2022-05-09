import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props);  
        this.state= {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value})        
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" onChange={this.handleChange} value={this.state.value}></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>    

        </div>
        )
  }
}
export default Form