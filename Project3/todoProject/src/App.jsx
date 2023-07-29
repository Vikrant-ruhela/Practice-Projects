import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [data, setData] = useState([])
  const [status, setStatus] = useState([])

  function handleChange(event) {
    setTask(event.target.value)
  }

  function handleClick() {
    setData((D) => {
      const updated = [...D, task]
      return updated
    })
    setTask("")
    status.length == 0 ? setStatus(["Pending"]) :
      setStatus([...status, "Pending"])
  }

  function handleRemove(index) {
    const updatedDAta = data.filter((element, ind) => {
      return (ind !== index)
    })
    setData([...updatedDAta])
    const updatedStatus = status.filter((element, id) => {
      return (id !== index)
    })
    setStatus([...updatedStatus])
  }

  function handleUpdate(index) {
    const updatedSTatus = status
    if (updatedSTatus[index] == "Pending") {
      updatedSTatus[index] = "Complete"
    } else {
      updatedSTatus[index] = "Pending"
    }
    setStatus([...updatedSTatus])
  }

  return (
    <div className="flex  items-center justify-center flex-col pt-20 pb-8">
      <div className="flex h-16 bg-white pr-4 pl-4 rounded-lg mb-8">
        <input type="text" placeholder='Enter Todo' className='focus:outline-none' value={task} onChange={handleChange} />
        <button className='text-white bg-purple-700 w-24 h-10 m-auto font-medium rounded-lg hover:bg-purple-900' onClick={handleClick} >Add</button>
      </div>

      <div className="flex w-['90vw'] flex-wrap items-center justify-center" >
        {data.length !== 0 && data.map((element, index) => {
          return (
            <div className="flex flex-col bg-slate-900 text-white rounded-lg justify-center pt-4 pb-4 mr-4 ml-4 mt-4 mb-4 pl-8 pr-8" key={index}>

              <h1>
                {`${index + 1}. `}{element}
              </h1>

              <p>Status : {status[index]}</p>
              <button className='text-white bg-blue-900 w-48 h-10 m-auto font-medium rounded-lg mb-4 mt-4' onClick={() => { handleUpdate(index) }} >Update Status</button>
              <button className='text-white bg-blue-900 w-48 h-10 m-auto font-medium rounded-lg' onClick={() => { handleRemove(index) }} >Remove</button>
            </div>

          )
        })}
      </div>


    </div>
  )
}

export default App
