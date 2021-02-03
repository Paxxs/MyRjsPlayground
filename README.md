[TOC]
# 🤓零 js 基础硬写 Todo List 遇到的问题记录

## 动态化时候 state 该放在哪

-   如果单个组件使用，放在自身就行了
-   如果多个组件使用，放在共同的父组件的 state 中

> state 在哪，操作 state 的方法就在哪

## 父子组件之间通信方案

-   ` 父组件 ` 给 ` 子组件 ` 传数据：通过 props 传递
-   ` 子组件 ` 给 ` 父组件 ` 传数据：父组件先通过 props 传递一个回调函数

### 子传父 demo

> 此处代码只保留需要的地方

-   父组件：

```jsx
// 子组件可以通过 props 调用 finishALlTodoItem ( done )
finishALlTodoItem = ( done ) => {
  // done 是子组件传过来的值
}
render ( ) {
  return (
    <div>
        <Footer finishALlTodoItem={this.finishALlTodoItem} />
    </div>
 )
}
```

-   子组件：

```jsx
render ( ) {
    // 从 props 中拿到父组件传过来的函数
    const { finishALlTodoItem} = this.props
    return (
        <div>
            <input type="checkbox"
                // 然后子组件通过调用，传值给父组件。
                onChange={( event ) => finishALlTodoItem ( event.target.checked )} />
        </div>
 )
    }
```

## input 框 ( type="checkbox" ) 暗藏的小坑

用 React 先实现静态效果时候，在使用 checkbox 中想指定初始化的勾选状态，用 `checked` 会报错

> input 会变为只读，需要另外指定 `onChange` 处理函数 或 `readonly`

这时候用 `defaultChecked={true}` 能实现控制勾选效果和不报错。

**但是但是但是**，`defaultChecked` 只在第一次有效，后续更新值改变是不会有任何新显示的。

> 类似的 defaultValue 和 value

## 代码偷懒方案【

### 箭头函数

如果函数体只有一条语句，不用写 `{}`

返回的 return 也能直接省略掉：

```js
const finishedTodos = todos.reduce((accumulator) => {
    return accumulator + 1)
}, 0)

// 省略
const finishedTodos = todos.reduce((accumulator) => accumulator + 1, 0)
```

### Object

合并 Object：

- 使用`Object.assign`：

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

// 这里前面用一个 {}, 是防止改变前面的 o1 的值
const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 1, c: 1 }

// 如果不加，会改变
const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }
```

- 直接`{...o1,...o2,...o3}`

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = {...target,...source};
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
```

替换 Object 中的一对键值：

- 同样可以使用 `Object.assign` 实现
- `{...target, key:value}`:

```js
const target = { a: 1, b: 2 };

const returnedTarget = {...target, b:4}
console.log(returnedTarget) // { a: 1, b: 4 }
```

```js
const target = { a: 1, b: 2 };
const b = 10

const returnedTarget = {...target, b:b}
// 如果value直接用的是变量，且等于key的名称，可以直接省略：
const returnedTarget2 = {...target, b}

console.log(returnedTarget) // { a: 1, b: 10 }
console.log(returnedTarget2) // { a: 1, b: 10 }
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) .

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can』t go back!**

If you aren』t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies ( webpack, Babel, ESLint, etc ) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you』re on your own.

You don』t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn』t feel obligated to use this feature. However we understand that this tool wouldn』t be useful if you couldn』t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) .

To learn React, check out the [React documentation](https://reactjs.org/) .

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
