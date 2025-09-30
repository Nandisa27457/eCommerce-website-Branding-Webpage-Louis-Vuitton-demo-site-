import { useState } from 'react'
import Header from './components/Header'
import Herosection from './components/Herosection'
import './App.css'
import Collections from './components/Collections'
import Dedication from './components/Dedication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Herosection/>
    <Collections/>
    <Dedication/>
    </>
  )
}

export default App
