import { useState } from "react";
import "./Counter.css"

const Counter = ({onAdd, stock, initial,label}) =>{
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    return(
                <div className="counter">
                    <div className="counter-content">
                        <button onClick={decrement} disabled = {count === initial ? true : null }>-</button>
                        <span>{count}</span>
                        <button onClick={increment} disabled = {count === stock ? true : null }>+</button>
                    </div>
                    
                    <div className="item-add-to-card">
                        <button onClick={()=> onAdd(count)} disabled={stock === 0 ? true : null}>{label}</button>
                    </div>
                </div>
                
        
    )
    
}

export default Counter