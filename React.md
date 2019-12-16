# Main Concepts
## Thinking in React

### 三个问题检查数据是否属于state
1. 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
2. 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
3. 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

### 确定state存放位置
+ 找到根据这个 state 进行渲染的所有组件。
+ 找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）。
+ 该共同所有者组件或者比它层级更高的组件应该拥有该 state。
+ 如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置。

# Advanced Guides
## Code Splitting
1. `import()`  
在你的应用中引入代码分割的最佳方式是通过动态 import() 语法。
```javascript
  // before
  import { add } from './math';

  console.log(add(16, 26));

  // after
  import("./math").then(math => {
    console.log(math.add(16, 26));
  });
```

2. React.lazy  
React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）。
```javascript
  // before
  import OtherComponent from './OtherComponent';

  // after
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
```
3. 基于路由的代码分割
```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```
4. 命名导出  
React.lazy 目前只支持默认导出（default exports）。如果你想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块。这能保证 tree shaking 不会出错，并且不必引入不需要的组件。
```javascript
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;

// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";

// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));
```