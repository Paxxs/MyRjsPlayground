import React, { Component } from 'react'
// import './App.css'
import sytles from './App.module.css'
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className={sytles.todo_container}>
        <div className={sytles.todo_wrap}>
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
