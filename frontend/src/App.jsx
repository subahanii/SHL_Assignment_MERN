import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div div className='container-md'>
      <Header/>
      <h1>hello</h1>
    </div>
  )
}

export default App
