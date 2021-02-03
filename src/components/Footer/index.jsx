import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './index.css'
import styles from './index.module.css'

export default class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired
    }
    render() {
        const { todos } = this.props
        // const finishedTodos = todos.reduce((accumulator, curr_todoObj) => {
        //     return accumulator + (curr_todoObj.done ? 1 : 0)
        // }, 0)
        // * 如果函数体只有一句代码，可以省去 {}。返回用的 return 也能省略
        // 计算完成的todo数量
        const finishedTodos = todos.reduce((accumulator, curr_todoObj) => accumulator + (curr_todoObj.done ? 1 : 0), 0)
        // 所有 todo 数量
        const totalTodos = todos.length
        return (
            <div className={styles.todo_footer}>
                <label>
                    <input type="checkbox"
                        // * 这里有个隐藏的坑，默认值只有在初始时候有效。后续更改值是不会有任何显示的
                        // defaultChecked={finishedTodos === totalTodos ? true : false}

                        // * 用 checked 需要有 onChange 处理函数或 readOnly
                        checked={finishedTodos === totalTodos && totalTodos !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{finishedTodos}</span> / 全部{totalTodos}
                </span>
                <button className={`${styles.btn} ${styles.btn_danger}`}>清除已完成任务</button>
            </div>
        )
    }
}
