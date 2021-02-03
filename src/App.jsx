import React, { Component } from 'react'
import { nanoid } from 'nanoid'
// import './App.css'
import sytles from './App.module.css'
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

// 从 localStorage 初始化 state
let initState = {
  todos: []
}

let todoKey = "todos"
const persistedTodos = JSON.parse(localStorage.getItem(todoKey))
console.log("localStorage", persistedTodos, localStorage)
// 被json解析后，如果没有值是null，只要存在就覆盖 initState
if (persistedTodos) {
  initState = persistedTodos
}

class App extends Component {
  // 从 localStorage 初始化 state
  state = initState

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

  finishALlTodoItem = (done) => {
    const newTodos = this.state.todos.map((todoObj) => {
      return { ...todoObj, done }
    })
    console.log(newTodos)
    this.setState(
      { todos: newTodos }
    )
  }

  delFinishedTodoItem = () => {
    const newTodos = this.state.todos.filter((todoObj) => !todoObj.done)
    // console.log(newTodos)
    this.setState({
      todos: newTodos
    })
  }

  componentDidUpdate() {
    // 当组件更新完后，保存当前state值
    localStorage.setItem(todoKey, JSON.stringify(this.state))
  }

  render() {
    return (
      <div className={sytles.todo_container}>
        <h1 className={sytles.h1}>Todo List</h1>
        <div className={sytles.todo_wrap}>
          <Header addTodoItem={(name) => { this.addTodoItem(name) }} />
          <List todos={this.state.todos} checkTodoItem={this.checkTodoItem} delTodoItem={this.delTodoItem} />
          <Footer todos={this.state.todos} finishALlTodoItem={this.finishALlTodoItem} delFinishedTodoItem={this.delFinishedTodoItem} />
        </div>
      </div>
    )
  }
}

export default App;
