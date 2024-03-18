import './App.css'

import HeaderNavbar from './SharedComp/Navbar'
import Home from './Components/HomePage/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <HeaderNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
