import { Route, Routes } from 'react-router-dom'
import './App.css'

import NavbarWithSearch from './SharedComp/Navbar'
import Home from './Components/HomePage/Home'

function App() {
  return (
    <>
      <NavbarWithSearch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
