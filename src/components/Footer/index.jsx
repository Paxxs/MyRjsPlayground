import React, { Component } from 'react'
// import './index.css'
import styles from './index.module.css'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.todo_footer}>
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>已完成0</span> / 全部2
        </span>
                <button className={`${styles.btn} ${styles.btn_danger}`}>清除已完成任务</button>
            </div>
        )
    }
}
