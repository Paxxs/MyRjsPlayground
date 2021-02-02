import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './index.css'
import styles from './index.module.css'

export default class Item extends Component {
    state = {
        mouseOn: false
    }
    static propsTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }
    // 检测鼠标是否移入，更新状态
    handleMousehover = (mouseOn) => {
        return () => {
            this.setState({
                mouseOn
            })
        }
    }
    render() {
        const { name, done } = this.props
        return (
            <li onMouseEnter={this.handleMousehover(true)} onMouseLeave={this.handleMousehover(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button
                    // className="btn btn-danger" 
                    className={`${styles.btn} ${styles.btn_danger}`}
                    style={{ display: this.state.mouseOn ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
