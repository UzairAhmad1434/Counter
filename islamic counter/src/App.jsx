import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let addValue=()=>{
    setCount(count+1)
  }
  let removeValue=()=>{
    setCount(count-1)
  }


  return (
    <>
      <h1 className='font-thin m-2'>Islamic Counter </h1>
      <h1 className='text-center font-semibold font-serif m-6'>{count}</h1>
      <button onClick={addValue} className='bg-green-500 text-white rounded-lg p-4 m-1 w-36'>Add Value</button>
      <button onClick={removeValue} className='bg-green-500 text-white rounded-lg p-4 m-1' >Remove Value</button>
    </>
  )
}

export default App
