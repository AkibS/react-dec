import PropTypes from 'prop-types';
import { Component } from "react";


class CompOne extends Component{
    // static defaultProps = {
    //     compName : "Default Company",
    //     version : "0.0"
    // }

    static propTypes = {
        compName : PropTypes.string.isRequired,
        productsInStock : PropTypes.number.isRequired
    }

    render(){
        return <div>
                    <h1>
                        <br/> 
                        Seller Info : { this.props.compName }
                        <br/> 
                        Current Version :  { this.props.version } 
                        <br/> 
                        Items for sale : { this.props.productsInStock - 20 }
                        </h1>
               </div>
    }
}
CompOne.defaultProps = {
    compName : "Placeholder Name",
    version : "0.0.0"
}

// CompOne.propTypes = {
//     compName : PropTypes.string.isRequired,
//     productsInStock : PropTypes.number.isRequired
// }
export default CompOne;