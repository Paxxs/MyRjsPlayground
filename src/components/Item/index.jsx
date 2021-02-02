import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './index.css'
import styles from './index.module.css'

export default class Item extends Component {
    static propsTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }
    render() {
        const { name, done } = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button
                    // className="btn btn-danger" 
                    className={`${styles.btn} ${styles.btn_danger}`}
                    style={{ display: 'none' }}>删除</button>
            </li>
        )
    }
}
