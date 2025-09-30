import { useState } from 'react'
import Header from './components/Header'
import Herosection from './components/Herosection'
import './App.css'
import Collections from './components/Collections'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Herosection/>
    </>
  )
}

export default App
