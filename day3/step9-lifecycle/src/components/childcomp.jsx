import { Component } from 'react'
class ChildComp extends Component{
  constructor(){
    super()
    this.state = {
      title : "Child Comp"
    }
    console.log("ChildComp's constructor was called");
  }
  static getDerivedStateFromProps(){
      console.log("ChildComp's getDerivedStateFromProps was called", arguments.length);
      return true
  }
  shouldComponentUpdate(){
      console.log("ChildComp's shouldComponentUpdate was called", arguments[0], arguments[1], arguments[2]);
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("ChildComp's getSnapshotBeforeUpdate was called", arguments.length);
     return true
  }
  componentDidUpdate(){
      console.log("ChildComp's componentDidUpdate was called", arguments.length);
  }
  componentDidMount(){
    console.log("ChildComp's ComponentDidMount was called ", arguments.length);
  }
  render(){
    console.log("ChildComp's render was called", arguments.length);
    return <div>
                <h1> Welcome to Child Component </h1>
                <h2>Power assigned from the parent comp : { this.props.pow }</h2>
            </div>
  }
}

export default ChildComp;

/*
updation / update
  shouldComponentUpdate
  getSnapshotBeforeUpdate
  componentDidUpdate
*/