import React ,{useState,useEffect} from 'react'
export default function User (){
    const [date,setDate] = useState(new Date())
    useEffect(()=>{
        const timeId = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=> clearInterval(timeId)
    })
return <div>{date.toLocaleDateString()}</div>
}