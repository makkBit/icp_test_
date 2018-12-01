import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super();
    this.state = {
      strInput: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    console.log(event.target.value);
    this.setState({
      strInput: event.target.value
    });
  }

  onFormSubmit(event){
    event.preventDefault();
    const url = `http://localhost:8000/?str=${this.state.strInput}`;
    axios.get(url)
    .then( (data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <p>Enter the string!!</p>
          <input className="strInput" 
            onChange={this.handleInputChange}
            value={this.state.strInput}>
          </input>
          <button onClick={this.onFormSubmit} type="submit" >submit</button>
        </form>
        <h1>Your entered String is: {this.state.strInput} </h1>
      </div>
    );
  }
}

export default App;
