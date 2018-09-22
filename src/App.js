import React, { Component } from 'react';
import './App.css';
import InquiryForm from './containers/InquiryForm/InquiryForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InquiryForm/>
      </div>
    );
  }
}

export default App;
