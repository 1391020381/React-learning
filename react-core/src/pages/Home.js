import React,{Component} from "react"


export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
    return (
        <div>
            {this.state.date.toLocaleDateString()}
        </div>
    )
    }
}