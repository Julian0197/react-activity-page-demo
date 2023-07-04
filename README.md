+ 盒子模型
+ npx
+ sass和scss


> css module

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