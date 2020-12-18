import { Component } from "react";

class ChildComp extends Component{
    constructor(){
        super();
        this.state = {
            parentMessage : ''
        }
    }

    render(){
        return <div>
                    <h1> Hello from Child Component </h1> 
                    <h1>Message from Parent Comp : { this.state.parentMessage } </h1>
                    <button onClick={ ()=>{ 
                        this.setState( {
                            parentMessage : this.props.childMessage
                        }) 
                    } }> Get Message </button>
                    <hr/>
                    <button onClick={ () => {
                        this.props.handlerFun('child comp says hi');
                    } }>Click to Change Temp Message</button>
               </div>
    }
}

export default ChildComp