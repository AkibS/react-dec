import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './components/childcomp';
/*
creation / mounting
  constructor
  getDerivedStateFromProps (static)
  render
  componentDidMount

updation / update
  getDerivedStateFromProps (static)
  shouldComponentUpdate
  render
  getSnapshotBeforeUpdate
  componentDidUpdate

deletion / unmounting
  componentWillUnmount

error
  getDerivedStateFromError
  componentDidCatch
*/
class MainApp extends Component{
  constructor(){
    super();
    this.state = {
      title : "Batman",
      power : 0
    }
    console.log("MainApp's Constructor was called ");
  }

  increasePowerHandler = () => {
      this.setState({
        power : this.state.power+1
      })
  }

  render(){
    console.log("MainApp's Render was called ");
    return <div>
            <h1> Welcome to your life </h1>
            <h2> Hero Title is : { this.state.title }</h2>
            <button onClick={this.increasePowerHandler}> Increase Power </button>
            <ChildComp pow={ this.state.power }/>
          </div>
  }

  static getDerivedStateFromProps(props, state){
    // console.log(arguments[0], arguments[1]);
    console.log("MainApp's GetDerivedStateFromProps was called ");
    return {
      title : props.arg
    }
  }

  componentDidMount(){
    console.log("MainApp's ComponentDidMount was called ", arguments.length);
  }

}

ReactDOM.render(<MainApp arg="Joker"/>,
  document.getElementById('root')
);
