import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import AppRouter from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <AppRouter/>
    </>
  )
}

export default App
