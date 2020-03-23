import React,{Component} from 'react'
export default class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            date:0
        }
    }
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState({
                date:this.state.date + 1
            },()=>{
                this.props.change(this.state.date)
            })
        },1000)
    }
    render(){
        return (
            <div>
                <p>Clock组件</p>
                {this.state.date}
            </div>
        )
    }
}