import { Component } from "react";
import ReactDOM from "react-dom";

class MainApp extends Component{
    constructor(){
        super();
        this.state = {
            power : 0,
            title : ''
        }
        this.increasePower = this.increasePower.bind(this);
    }
    // increasePower(){
    //     this.setState({
    //         power : this.state.power + 1
    //     });
    //    console.log(this.state.power);
    // }
    // increasePower(){
    //     this.setState({
    //         power : this.state.power + 1
    //     }, function(){
    //         console.log(this.state.power);
    //     });
    // }
    increasePower(){
        this.setState(function(previousState, prop){
            return {
                power : previousState.power+1,
                title : prop.author
            }
        }, function(){
            console.log(this.state.power);
        });
    }
    render(){
        return <div>
                    <h1> Power now is : { this.state.power }</h1>
                    <h1> Application Title : { this.state.title }</h1>
                    <button onClick={ this.increasePower }>Increase Power</button>
                </div>
    }
}

ReactDOM.render(<MainApp author="Vijay"/>, document.getElementById("root"));