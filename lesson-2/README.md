## 初识React

> 1. react是一个js库，更加关注视图的构建。
> 2. 在原生h5应用中，js操作dom代价是非常昂贵的，react是以最小代价(最少次数)去操作dom, 但不一定比原生js操作dom快。

与原生js做比较

```jsx
// html
<div id="app"></div>

// js
<script>
  document.getElementById('app').innerHTML = '<h1>hello, world pure</h1>'
</script>

// react
<script src="../lib/react.js"></script>
<script src="../lib/react-dom.js"></script>
<script src="../lib/babel.min.js"></script>
<script type="text/babel">
  ReactDOM.render(
    <h1>hello, world</h1>,
    document.getElementById('app')
  );
</script>
```

## 元素(Element)

> 1. 元素是构成React应用的最小单元
> 2. 元素是你在屏幕上能够看到的东西
> 3. 可以简单理解为，用标签包裹起来的就是元素

```jsx
// 元素
const element = <div>huang</div>;
```

## JSX

> 在React中，jsx是用来声明React元素的

```jsx
// 原生js中
var element = '<h1>hello-world, dada</h1>';
// jsx中
const element = <h1>hello-world, dada</h1>;

ReactDOM.render(
  element,
  document.getElementById('app')
);
```

#### 1. 嵌入表达式

> 通过一个大括号

```jsx
const element = <h1>{ 1 + 2 }</h1>; // 3
```

#### 2. JSX属性 

```jsx
// 传递属性为字符串要加上引号
const element = <div name="logo">my logo</div>; // my logo

// 传递属性为变量要加上{}
const data = 'dada'
const element = <div data={data}>huang</div> // huang
```

`JSX的属性采用驼峰命名: 注意一些特殊标签的命名, class要写成className, tabindex要写成tabIndex`

#### 3. 自闭标签

```jsx
// 没有内容的标签，可以选择自闭
const element = <img src="https://fe.imdada.cn/myosotis/assets/src/home/images/next.png" />
```

#### 4. JSX实质

```jsx
// 以下两段代码是等价的
const element = (
  <h1 className="greeting">Hello, world!</h1>
);

// 编译成对象
const element = React.createElement(
  'h1', // 标签名
  {className: 'greeting'}, // 属性值
  'Hello, world!' // 内容值
);
```

## 组件及props(重要)

> 组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。

#### 用函数定义组件

> 纯展示组件，所有数据都通过外部传入

```jsx
function Welcome(props) {
  return <h1>Hello</h1>;
}
```

#### 用class定义组件

> 1. 带状态的组件，组件内部允许有组件自己维护的数据
> 2. 可以使用生命周期函数

```jsx
class Welcome extends React.Component {
  state = {
      // 组件内部有自己维护的数据，不供外部使用，它是局部的
      data: 'Hello'
  }
  
  render() {
    return <h1>{ this.state.name }</h1>;
  }
}
```

#### 组件抽离

> 1. 可以组件复用
> 2. 可维护性高
> 3. 一个逻辑复杂的组件尽量只做一件事

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      
      <div className="Comment-text">
        {props.text}
      </div>
      
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// 抽离userInfo
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <img className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

// 变成
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

#### props

> 1. 顾名思义是指组件的属性
> 2. props是只读的，一定不能（直接）更改props的值

```jsx
const Welcome = props => {
    return <h1>Hi, { props.name }</h1>
}

// name为组件属性
const element = <Welcome name="NewDada" />
ReactDOM.render(
  element,
  document.getElementById('app')
);

// 输出 Hi, NewDada
```

## state及生命周期

> 1. 一个组件需要有自己的状态，需要用到state
> 2. state是私有的，完全受控于当前组件。
> 3. 要使用state, 你需要将函数声明的组件转化为class声明的组件

看一个例子: Clock.js

注意:

> 1. 不要直接更新state, 只能使用`this.setState`函数进行更新。
> 2. 如果你有些内部数据不在render函数中使用，请不要放在state中。

#### 生命周期

第一次渲染时相关生命周期函数

```jsx
constructor() {}
componentWillMount() {} // 组件将要挂载
render() {}			        // 渲染
componentDidMount() {} //  组件已经挂载
// 组件将要卸载时调用
componentWillUnmount() {}
```

组件更新时

```jsx
componentWillReceiveProps() {}
shouldComponentUpdate() {}
componentWillUpdate() {}
componentDidUpdate() {}
```
