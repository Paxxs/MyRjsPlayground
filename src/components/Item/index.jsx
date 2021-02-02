import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './index.css'
import styles from './index.module.css'

export default class Item extends Component {
    state = {
        mouseOn: false
    }
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        checkTodoItem: PropTypes.func.isRequired,
        delTodoItem: PropTypes.func.isRequired
    }
    // 检测鼠标是否移入，更新状态
    handleMousehover = (mouseOn) => {
        return () => {
            this.setState({
                mouseOn
            })
        }
    }
    // 来自APP 父组件的回调，处理完成todo的打勾
    handleCheck = (id) => {
        return (event) => {
            // console.log(id, event.target.checked)
            this.props.checkTodoItem(id, event.target.checked)
        }
    }

    // 删除一条 todo
    handleDel = (id) => {
        if (window.confirm("🤔 亲亲，确定要删除嘛？"))
            this.props.delTodoItem(id)
    }
    render() {
        const { id, name, done } = this.props
        return (
            <li onMouseEnter={this.handleMousehover(true)} onMouseLeave={this.handleMousehover(false)}>
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button
                    // className="btn btn-danger" 
                    className={`${styles.btn} ${styles.btn_danger}`}
                    // onClick={() => { this.props.delTodoItem(id) }}
                    onClick={() => { this.handleDel(id) }}
                    style={{ display: this.state.mouseOn ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
