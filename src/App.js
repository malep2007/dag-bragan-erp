import React, { Component } from 'react';
import classes from './App.css';
import InquiryForm from './containers/InquiryForm/InquiryForm';
import LoginForm from './containers/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header/>
        {/* <LoginForm/> */}
        <InquiryForm/>
        <Footer/>
      </div>
    );
  }
}

export default App;
