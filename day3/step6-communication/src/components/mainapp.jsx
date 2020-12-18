import { Component } from "react";
import ChildComp from "./childcomp";

class MainApp extends Component{

    constructor(){
        super();
        this.state = {
            message : "Welcome to your life",
            tempMessage : 'default value'
        }
        this.changeTempMessage = this.changeTempMessage.bind(this);
    }
    changeTempMessage(evt){
        this.setState({
            tempMessage : evt
        })
    }

    render(){
        return <div>
                    <h1> Hello from Main Application </h1>
                    <h1> Template Message is : { this.state.tempMessage } </h1>
                <hr/>
                <ChildComp handlerFun={ this.changeTempMessage } childMessage={ this.state.message }/>
               </div>
    }
}


export default MainApp;