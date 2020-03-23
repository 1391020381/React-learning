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

