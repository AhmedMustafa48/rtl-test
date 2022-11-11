import React from 'react'
import { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <form>
        <input type="text" value={name.firstName} onChange={e => setName({...name ,  firstName: e.target.value})}></input>
        <input type="text" value={name.lastName} onChange={e => setName({...name , lastName: e.target.value})}></input>
        <h1>your first name is -{name.firstName}</h1>
        <h1>your last name is -{name.lastName}</h1>
        <h3>{JSON.stringify(name)}</h3>
    </form>
  )
}

export default HookCounterThree
