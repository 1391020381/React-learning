1. 使用 redux 创建  store
2. 在 APP.js 中引入 Provider（react-redux） 并包裹 App 并把 redux创建的 store 传递给 Provider   store={store}
3. 在要使用的组件中 引入 connect

```
import { createStore ,applyMiddleware,combineReducers} from redux

createStore(combineReducers({
    counter :counterReducer,
    counter2:counterReducer2  
}))  // 返回一个对象


connect（
state:{ // mapStateToProps
    return {counter:state}
},
{ // mapDispatchToProps
    add:()=>{
        return {
            type:'add'
        }
    }，
    asyAdd:()=>dispatch=>{
        setTimeout(()=>{
            dispatch({
                type:"add"
            })
        },1000)
    }
}）（componentName）

```
* redux-thunk redux-logger
* applyMiddle(logger,thunk)  applyMiddle提供的方法



# setState 一般是异步,怎样使其是同步

* setState 只有在合成事件 和钩子函数中是 异步的,在原生事件和setTimeout setInterval 中都是 同步的


* 事件回调函数注意绑定this指向问题,常见三中方法:
    - 构造函数中绑定并覆盖 this.change = this.change.bind(this)
    - 方法定义为箭头函数 change = ()=> {}
    - 事件中定义为箭头函数  onChange = {()=> this.change()}

# 组件通信
* Props属性传递
    - Props属性传递可用于父子组件相互通信
    - 如果父组件传递的是函数,则可以把子组件信息传入父组件,这个常称为 状态提升。 
# hook
* useState,useEffect  react
# 生命周期   
- construct
- componentWillMount
- render
- componentDidMount
- shouldComponentUpdate
- componentWillUpdate
- componentDidUpdate
- componentWillReceiveProps
- componentWillUnmount

  * v16.4废弃的生命周期  
    - componentWillMount
    - componentWillReceiveProps
    - componentWillUpdate

  * 引入生命周期
  * static getDerivedStateFromProps 返回一个对象 更新 state 如果返回 null 则不更新任何内容。
  * getSnapshotBeforeUpdate  



