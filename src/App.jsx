import { useState } from 'react'
import navBar from './components/navBar'
import './App.css'
import NavBar from './components/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/>
    </>
  )
}

export default App
