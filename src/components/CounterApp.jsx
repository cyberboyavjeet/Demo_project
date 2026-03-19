import { useState } from "react";

function CounterApp(){
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(reset)
    }
    return(
        <div>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={increment}>increment</button>
            </div>
            <div>
                <button onClick={decrement}>decrement</button>
            </div>
            <div>
                <button onClick={reset}>reset</button>
            </div>
            {
                count==10
                &&
            <h3>Congrates Incremeented</h3>
            }
        </div>
        
    )
}
export default CounterApp