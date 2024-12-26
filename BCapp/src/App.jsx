import { useState } from "react"

function App() {
  const[color,setColor]=useState("black")

 const handleRed=()=>{
  
      setColor("#FF0000")
  }
  return (
    <div>
      <div style={{backgroundColor:color}} className="flex justify-center items-center w-screen  min-h-screen">
        <div className="flex justify-between gap-5 ">
      <p className="bg-red-500 p-2 text-white rounded" onClick={handleRed}>Red</p>
      <p className="bg-blue-500 p-2 text-white rounded" onClick={()=>setColor("#0000FF")}>Blue</p>
      <p className="bg-yellow-500 p-2 text-white rounded" onClick={()=>setColor("#FFFF00")}>Yellow</p>
        </div>
      </div>
    </div>


  
  )
}

export default App
