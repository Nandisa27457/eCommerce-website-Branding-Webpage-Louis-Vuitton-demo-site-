import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Herosection from './components/Herosection'
import './App.css'
import Collections from './components/Collections'
import Dedication from './components/Dedication'
import FashionGrid from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Herosection/>
      <Collections/>
      <Dedication/>
      <FashionGrid/>
      <Footer/>
    </>
  )
}

export default App
