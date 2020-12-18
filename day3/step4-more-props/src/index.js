import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CompOne from './components/compOne';

class MainApp extends Component{
  render(){
    return <React.Fragment>
            <h1>Welcome to your life</h1>
            <CompOne version="1.0.0" productsInStock={ 120 }/>
           </React.Fragment>
  }
}

ReactDOM.render(<MainApp/>,  document.getElementById('root'));