import React, { Component } from 'react'
import { nanoid } from 'nanoid'
// import './App.css'
import sytles from './App.module.css'
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  state = {
    todos: [
      {
        id: nanoid(),
        name: "吃饭",
        done: true
      }, {
        id: nanoid(),
        name: "睡觉",
        done: true
      }, {
        id: nanoid(),
        name: "打豆豆",
        done: true
      }
    ]
  }

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
