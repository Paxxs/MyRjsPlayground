import React, { Component } from 'react'
import Item from '../Item'
// import './index.css'
import styles from './index.module.css'

export default class List extends Component {
  render() {
    return (
      <ul className={styles.todo_main}>
        <Item />
        <Item />
      </ul>
    )
  }
}
