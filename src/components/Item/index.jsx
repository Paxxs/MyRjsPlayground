import React, { Component } from 'react'
// import './index.css'
import styles from './index.module.css'

export default class Item extends Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox" />
                    <span>xxxxx</span>
                </label>
                <button
                    // className="btn btn-danger" 
                    className={`${styles.btn} ${styles.btn_danger}`}
                    style={{ display: 'none' }}>删除</button>
            </li>
        )
    }
}
