import { useState, useRef, useEffect } from 'react'
import './App.css'



function App() {
  const inputTag = useRef()
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  function handleClick() {
    setData([...data, `${inputTag.current.value}`])
    setCount(count + 1)
  }


  useEffect(() => {
    console.log(count, data);
  }, [count])

  return (
    <div className="flex bg-gradient-to-b from-purple-600 to-black h-screen items-center justify-center flex-wrap flex-col pt-20 pb-8">
      <div className="flex h-16 bg-white pr-4 pl-4 rounded-lg mb-8">
        <input type="text" placeholder='Enter Todo' className='focus:outline-none' ref={inputTag} />
        <button className='text-white bg-purple-700 w-24 h-10 m-auto font-medium rounded-lg hover:bg-purple-900' onClick={handleClick} >Add</button>
      </div>

      {data.map((element) => {

        <div className="flex w-['90vw'] flex-wrap items-center justify-center">
          <div className="flex flex-col bg-slate-900 text-white rounded-lg justify-center pt-4 pb-4 mr-4 ml-4 mt-4 mb-4 pl-8 pr-8">

            <h1>
              {count}{element}
            </h1>

            <p>Status:{' Pending'}</p>
            <button className='text-white bg-blue-900 w-48 h-10 m-auto font-medium rounded-lg mb-4 mt-4'>Update Status</button>
            <button className='text-white bg-blue-900 w-48 h-10 m-auto font-medium rounded-lg'>Remove</button>
          </div>

        </div>

      })}



    </div>
  )
}

export default App
