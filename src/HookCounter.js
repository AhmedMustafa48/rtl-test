import React from 'react'
import { useState } from 'react'

function HookCounter() {
    const[count , setCount] =useState(0)
 
    return (
    <div>
        <h1>Counter is {count}</h1><br></br>
      <button onClick={() => setCount(count + 1)}>1 Increment</button><br></br>
      <button onClick={() => setCount(count - 1)}>1 decrement</button><br></br>

    </div>

  )
}

export default HookCounter
