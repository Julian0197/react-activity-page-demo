## 涉及知识

### 盒子模型

盒子模型的组成部分包括：

1. 内容区域（content area）：盒子模型的核心部分，包含了元素的实际内容，比如文字、图像等。内容区域的宽度和高度可以通过设置元素的width和height属性来控制。

2. 内边距（padding）：内容区域与边框之间的空白区域，用于控制元素内容与边框之间的距离。内边距可以通过设置元素的padding属性来进行控制。

3. 边框（border）：包围在内容区域和内边距外部的一条线，用于界定元素的边界。边框可以通过设置元素的border属性来进行控制。

4. 外边距（margin）：元素与其他元素之间的空白区域，用于控制元素与周围元素之间的距离。外边距可以通过设置元素的margin属性来进行控制。

在CSS中，盒子模型的总宽度和高度可以通过以下公式计算：

总宽度 = 左边框宽度 + 左内边距 + 内容区域宽度 + 右内边距 + 右边框宽度
总高度 = 上边框高度 + 上内边距 + 内容区域高度 + 下内边距 + 下边框高度

盒子模型的默认行为是：总宽度和总高度都包含了内容区域、内边距和边框的大小。但是，可以通过设置CSS的box-sizing属性来改变盒子模型的行为。box-sizing属性有两个值：

1. content-box：默认值，表示总宽度和总高度包含了内容区域、内边距和边框的大小。
2. border-box：表示总宽度和总高度只包含了内容区域的大小，内边距和边框的大小会被包含在总宽度和总高度中。

### sass、scss和css

Sass（Syntactically Awesome Style Sheets）是一种**CSS预处理器**，它扩展了CSS的功能并提供了更多的灵活性和可维护性。Sass使用一种特定的语法，可以包含变量、嵌套规则、Mixin（混入）、函数等功能，并可以通过编译将其转换为标准的CSS文件。

Sass有两种语法格式：**Sass和SCSS**。**Sass采用缩进式**的语法，类似于Python，而**SCSS则采用类似于CSS的语法**。两种语法的核心功能是相同的，只是语法上稍有差异。Sass的文件扩展名是".sass"，而SCSS的文件扩展名是".scss"。

CSS是一种用于定义网页样式的标准语言。它定义了网页元素的外观和布局，包括字体、颜色、边框、背景等。CSS可以直接在HTML文件中使用，也可以通过外部CSS文件引入。

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

注意，在使用 CSS Module 时，**样式类名是通过导入的对象来引用**的，而不是直接写类名字符串。这样可以确保在编译时，类名会被自动转换成唯一的标识符，避免了全局命名冲突。

CSS Module通过在构建过程中将CSS样式表转换为具有唯一类名的局部作用域的形式来实现样式隔离。在使用CSS Module时，**每个CSS样式表都会被编译成一个独立的模块，并为每个类名生成一个唯一的标识符**。这样，每个组件的样式都会被限定在其所属的模块内部，避免了样式冲突的问题。

### useState

useState 用于在函数组件中添加状态

使用useState函数，可以在函数组件中定义一个状态变量。它接受一个初始值作为参数，并返回一个由当前状态值和一个更新状态值的函数组成的数组。

使用useState的语法如下：
```jsx
const [state, setState] = useState(initialValue);
```
其中state是当前的状态值，而setState是一个用于更新状态的函数。

在函数组件中使用useState时，可以通过调用setState函数来更新状态：
```jsx
setState(newValue);
```
调用setState函数会**重新渲染组件**，并将state的值更新为newValue。

useState函数可以多次调用，用于定义多个状态变量。每个状态变量都有自己的state和setState。

### useRef

useRef 用于在函数组件中创建和获取对DOM节点或其他值的持久引用。

useRef的主要作用有两个方面：

1. 获取DOM节点的引用：通过将ref属性传递给DOM元素，可以获取对该DOM元素的引用。这样可以在需要直接操作DOM的情况下，例如设置焦点、测量元素尺寸等，使用ref.current来访问DOM节点。
2. 存储任意可变值：ref对象的.current属性可以存储任意可变值，类似于函数组件中的一个变量。不同于state，**ref的存储值的改变不会引发组件的重新渲染**，因此可以用来存储不需要触发重新渲染的状态。

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
