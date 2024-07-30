import { useState } from "react"
import NavBar from "./Components/NavBar"
import NewBoard from "./Components/NewBoard"

const App = () => {
  const [category,setCategory]=useState("general")
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewBoard category={category}/>
    </div>
  )
}

export default App

