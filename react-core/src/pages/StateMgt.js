import React,{Component} from 'react'
import Clock from './Clock'
export default class Search extends Component{
    constructor(props){
        super(props)
        this.state = {name:""}
    }
    onChange = date=>{
        this.setState({
            name:date
        })
        console.log("name:",this.state.name)
    }
    render(){
        const {name} = this.state
        return (
            <div>
               {name}
               <Clock change={this.onChange}></Clock>
            </div>
        )
    }
}