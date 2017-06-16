import React, { Component } from 'react';


import './App.css';

class App extends Component {
  render() {
    return (

        <div>
            <h1>This Shouldn't Change</h1>
        {this.props.children}
        </div>
    )
  }
}

export default App;
