import { useState } from 'react'
import './App.css'
import FacebookLoginButton from './components/FacebookLoginButton'
import FacebookSuccess from './components/FacebookSuccess'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<FacebookLoginButton />} />
        <Route path="/facebook-success" element={<FacebookSuccess />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
