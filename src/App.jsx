import { useState } from 'react'
import './App.css'
import GridComponent from './components/GridPattern'
import Header from './components/Header'
import Compiler from './components/Compiler'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen">
      <GridComponent />
      <Compiler />
      <Compiler />

    </div>
    </>
  )
}

export default App
