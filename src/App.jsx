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

  // 添加新的todo项，传递给Header子组件的回调函数
  addTodoItem = (name) => {

    const todoItem = {
      id: nanoid(),
      name,
      done: false
    }
    // console.log("Header添加了 ", todoItem)
    const newTodos = [todoItem, ...this.state.todos]
    this.setState(
      {
        todos: newTodos
      }
    )
  }

  // 完成todo处理
  checkTodoItem = (id, done) => {
    const NewTodos = this.state.todos.map((todoObj) => {
      if (todoObj.id === id)
        // console.log("更新后", { ...todoObj, done: done })
        // 后面的 done 是简写，实际上是 done: done
        return { ...todoObj, done }
      return todoObj
    })
    // console.log("来自item", id, done, NewTodos)
    this.setState({
      todos: NewTodos
    })
  }

  // 删除一项todo
  delTodoItem = (id) => {
    // 直接过滤掉
    const NewTodes = this.state.todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // console.log(NewTodes)
    this.setState({
      todos: NewTodes
    })
  }

  render() {
    return (
      <div className={sytles.todo_container}>
        <div className={sytles.todo_wrap}>
          <Header addTodoItem={(name) => { this.addTodoItem(name) }} />
          <List todos={this.state.todos} checkTodoItem={this.checkTodoItem} delTodoItem={this.delTodoItem} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
