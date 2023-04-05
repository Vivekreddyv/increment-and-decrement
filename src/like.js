import { useState } from "react"
import './style.css'

export function Like(){
    let [Count,setCount]=useState(0)
    function Increment(){
        Count+=1
        setCount(Count)
    }
    function Decrement(){
        Count-=1
        setCount(Count)
    }
    return(
        <div className="like">
            <h1>you have clicked {Count}</h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        </div>
    )
}