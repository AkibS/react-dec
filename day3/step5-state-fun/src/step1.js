import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainApp extends Component{
  state = {
    power : 5
  }
  constructor(){
    super();
    this.state.power = 0;
    this.addPower = this.addPower.bind(this);
  }
  increasePower(){
    this.setState(
      { 
        power : 10
      }
    )
  }
  addPower(){
    this.setState(
      { 
        power : 10
      }
    )
  }
  morePower = () => {
    this.setState(
      { 
        power : 10
      }
    )
  }

  increasePowerBy25(pow){
    this.setState(
      { 
        power : pow
      }
    )
  }
  increasePowerX(evt){
    this.setState(
      { 
        power : evt.target.value
      }
    )
  }

  render(){
    return <div>
      <h1>Hello from Main Application 
            <br/>
            Power now is : { this.state.power }
      </h1>
      <button onClick={ () => { this.setState({ power : 10 } ); console.log(this.state.power) } }>Click To Increase</button>
      <button onClick={ this.increasePower.bind(this) }>Click To Increase</button>
      <button onClick={ this.addPower }>Click To add Power</button>
      <button onClick={ this.morePower }>Click To more power</button>
      <button onClick={ () => { this.increasePowerBy25(25) } }>Click Increase Power to 25 </button>
      <input onChange={ (event) => { this.increasePowerX(event) } } type="range" />
    </div> 
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root')
);
// <button onClick={ () => { this.state.power += 10; console.log(this.state.power) } }>Click To Increase</button>


