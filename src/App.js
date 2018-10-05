import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        percentage: '',
        bps: ''
      }
      this.handleChangePercent = this.handleChangePercent.bind(this);
      this.handleChangeBps = this.handleChangeBps.bind(this);
  }
  

  handleChangePercent (event) {
    this.setState({
        percentage: event.target.value
    })
  }

  handleChangeBps (event) {
    this.setState({
        bps: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="dank">
          <h1> BPS to Percentage </h1>
          <p>Enter BPS Value </p>
          <input type="text" name="percent" value={this.state.percentage} onChange = {this.handleChangePercent} />
          <h3>{this.state.percentage/100} % </h3>

          <h1> Percentage to BPS </h1>
          <p> Enter Percentage Value </p>
          <input type="text" name="bps" value={this.state.bps} onChange = {this.handleChangeBps} />  
          <h3>{this.state.bps*100} bps </h3>
        </div> 
      </div>
    );
  }
}

export default App;
