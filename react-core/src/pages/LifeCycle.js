import React ,{Component} from 'react'
export default class LifeCycle extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter:0
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(props,state){
        // 会在 render 方法之前调用
        // 并且在初始化挂载及后续更新时都会被调用
        // 它返回一个对象来更新 state 如果 返回 null 则不更新任何内容
        const {counter} = state
        console.log("getDerivedStateFromProps:",counter)
        return counter < 8 ? null :{counter:0}
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        const {counter} = prevState
        console.log("getSnapshotBeforeUpdate:",counter)
        return null
    }
    // componentWillMount(){
    //     console.log("componentWillMount")
    // }
    componentDidMount(){
        console.log('componentDidMount')
    }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }
    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps')
    // }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate',nextState,nextState)
        return nextState !== 5
    }
    setCounter = ()=>{
        this.setState({
            counter:this.state.counter + 1
        })
    }
    render(){
        const {counter} = this.state
        console.log('render')
        return (
            <div>
                <h1>我是LifeCycle页面</h1>
        <p>{counter}</p>
        <button onClick={this.setCounter}>改变counter</button>
            {!!(counter%2)&&<Foo></Foo>}
            </div>
        )
    }
}

class Foo extends Component {
    // componentWillReceiveProps(){
    //     console.log('Foo componentWillReceiveProps')
    // }
    componentWillUnmount(){
        console.log('Foo componentWillUnmount')
    }
    render(){
        return <div>我是Foo组件</div>
    }
}