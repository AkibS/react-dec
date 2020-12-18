import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainApp extends Component{
  constructor(){
    super()
    this.state = {
      power : 3,
      title : "Batman"
    }
  }

  render(){
  //  if( this.state.power > 5 ){
  //   return <h1> Hero can fight he has strength of : { this.state.power} </h1>
  // }else{
  //    return <h1> Hero needs rest he has strength of : { this.state.power} </h1>
  //  }

  // return ( this.state.power > 5 ) ? <h1> Hero can fight he has strength of : { this.state.power} </h1> : <h1> Hero needs rest he has strength of : { this.state.power} </h1>
  
  //  return ( this.state.power > 5) && <h1> Hero can fight he has strength of  { this.state.power }</h1>
  
    return <div>
          <input type="range" min="0" max="10" step="1" onChange={
            (event) => {
              this.setState({
                power : event.target.value
              })
            }
          }/>
              <h1> { this.state.title } 
              <span>{ (this.state.power) < 5 ? ' Needs Rest' : ' Can Fight'}</span>
              </h1>
              <h2> { (this.state.power < 5) && ' Power is now 5' } </h2>
              <h2> { (this.state.power < 4) && ' Power is now 4' } </h2>
              <h2> { (this.state.power < 3) && ' Power is now 3' } </h2>
              <h2> { (this.state.power < 2) && ' Power is now 2' } </h2>
          </div>
  }
}

ReactDOM.render(<MainApp/>,  document.getElementById('root'));
