import React from 'react'
import { useState } from 'react'

function HookCounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(0)

    const incrementFive =() =>{
        for(let i=0 ; i<5; i++){
            setCount(prevCount =>prevCount + 1)
        }
    }

    const decrementFive =() =>{
        for(let i=0 ; i<5; i++){
            setCount(prevCount =>prevCount - 1)
        }
    }
    return (
    <div>
        <h1>Counter is {count}</h1><br></br>
      <button onClick={() => setCount(initialCount)}>Reset</button><br></br>
      <button onClick={() => setCount(count + 1)}>1 increment</button><br></br>
      <button onClick={() => setCount(count - 1)}>1 decrement</button><br></br>

      <button onClick={incrementFive}> 5 increment</button>
      <button onClick={decrementFive}> 5 decrement</button>
    </div>
  )
}

export default HookCounterTwo
