import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
// import './index.css'
import styles from './index.module.css'

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkTodoItem: PropTypes.func.isRequired,
    delTodoItem: PropTypes.func.isRequired
  }
  render() {
    const { todos, checkTodoItem, delTodoItem } = this.props
    return (
      <ul className={styles.todo_main}>
        {
          todos.map((todoObj) => {
            return (
              <Item key={todoObj.id}
                // key-value 直接全部通过props传给子组件
                {...todoObj}
                // 父组件App给item的回调函数，用于处理完成 todo 项
                checkTodoItem={checkTodoItem}
                delTodoItem={delTodoItem}
              />
            )
          })
        }
      </ul>
    )
  }
}
