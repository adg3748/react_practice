import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting'

class App extends Component { // Componentを継承
  constructor(props) {
    super(props)
    this.state = {
      name: 'Bob'
    }
  }
  handleMouseOver(){
    this.setState({name: "Mike"})
  }
  handleMouseOut(){
    this.setState({name: "Bob"})
  }
  handleOnChange(e){
    this.setState({name:e.target.value})
  }
  render() {
    return (
      <div
        className="App"
        onMouseOver={()=>this.handleMouseOver()}
        onMouseOut={()=>this.handleMouseOut()}
      >
          <h1 className="title">いろんな人に挨拶をしよう！</h1>
          <input
            type="text"
            value={this.state.name}
            onChange={e=>this.handleOnChange(e)}
          />
          <p className="App-intro">
            <Greeting name={this.state.name} />
          </p>
      </div>
    );
  }
}

export default App;
