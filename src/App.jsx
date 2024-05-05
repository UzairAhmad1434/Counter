import { useState } from "react"

function App() {
  let [counter,setcounter]=useState(0);
  const addValue= ()=>{
    setcounter(counter+1);
  }
  const removeValue= ()=>{
    setcounter(counter-1);
  }
  return (
      <>
      <h1>Counter </h1>
      <h1 id='count'>{counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      </>
  )
}

export default App
