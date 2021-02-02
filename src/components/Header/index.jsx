import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './index.css'
import styles from './index.module.css'

export default class Header extends Component {
    static propTypes = {
        // 父组件的回调函数，用于给父组件state添加todo项
        addTodoItem: PropTypes.func.isRequired
    }
    handleKeyup = (event) => {
        const { key, target } = event

        // 只处理按下Enter后的内容
        if (key !== "Enter")
            return
        // 不接受空白内容
        if (target.value.trim() === "") {
            alert("🤓 亲亲，咱不能新建空白 Todo")
            return
        }
        // console.log(target.value, key)
        this.props.addTodoItem(target.value)
        target.value = ""
    }
    render() {
        return (
            <div className={styles.todo_header}>
                <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
