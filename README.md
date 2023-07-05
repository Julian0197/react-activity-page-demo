## 涉及知识

### 盒子模型

`border-box`

### npx
### sass和scss

### css module

CSS Module 是一种用于组织和管理 CSS 的模块化方法。它通过在 CSS 类名前添加模块名的方式，将样式限定在特定模块中，避免了全局命名冲突的问题。

使用 CSS Module 时，我们需要在样式文件的命名上加上 `.module.css` 的后缀，例如 `styles.module.css`。然后，在 JavaScript 或 TypeScript 文件中，通过导入样式文件并使用导入的对象来引用样式。

```jsx
import React from 'react';
import styles from './styles.module.css';

function MyComponent() {
  return <div className={styles.container}>Hello, world!</div>;
}
```

注意，在使用 CSS Module 时，样式类名是通过导入的对象 `styles` 来引用的，而不是直接写类名字符串。这样可以确保在编译时，类名会被自动转换成唯一的标识符，避免了全局命名冲突。

### useState


### useRef

useRef 是一个 React Hook，它能让你引用一个不需要渲染的值。

### useEffect

useEffect是React中的一个Hook函数，用于在函数组件中执行副作用操作。副作用操作指的是那些不直接与渲染结果相关的操作，比如数据获取、订阅、手动修改DOM等。

useEffect接收两个参数，第一个参数是一个回调函数，称为effect函数，用于执行副作用操作。第二个参数是一个依赖数组，用于指定effect函数的依赖项。

当组件渲染完成后，useEffect会在每次渲染后执行effect函数。如果依赖数组为空，则effect函数在每次渲染后都会被调用。如果依赖数组中包含了某些变量，则只有这些变量发生变化时，才会重新执行effect函数。

一般来说，可以使用useEffect来执行以下操作：
1. 数据获取和订阅：可以在effect函数中发送异步请求获取数据，或者订阅某个事件源，当数据发生变化时更新组件。
2. 手动修改DOM：可以在effect函数中使用DOM操作，比如通过ref获取DOM元素并修改其样式或内容。
3. 清理操作：可以在effect函数中返回一个清理函数，用于清理副作用操作产生的资源，比如取消订阅、清除定时器等。

总之，useEffect提供了一种在函数组件中执行副作用操作的方式，可以在组件渲染后执行一些非渲染相关的操作，并且可以根据依赖项的变化来决定是否重新执行effect函数。

### getBoundingClientRect API

getBoundingClientRect() 是 JavaScript 中的一个方法，用于获取指定元素的客户端矩形大小和位置信息。

该方法返回一个 DOMRect 对象，包含了以下属性：
- top：元素上边缘到视口顶部的距离
- right：元素右边缘到视口左边的距离
- bottom：元素下边缘到视口顶部的距离
- left：元素左边缘到视口左边的距离
- width：元素的宽度
- height：元素的高度
- x：元素左边缘到视口左边的距离
- y：元素上边缘到视口顶部的距离
- toJSON()：将 DOMRect 对象转换为 JSON 格式的方法

这些值都是相对于视口（即浏览器窗口）的位置和大小信息，而不是相对于文档的。如果需要相对于文档的位置信息，可以用 window.scrollX 和 window.scrollY 来调整这些值。

getBoundingClientRect() 方法在很多情况下非常有用，比如可以用它来判断元素是否在视口内，或者计算元素相对于视口的位置，进而实现一些特定的交互效果。
