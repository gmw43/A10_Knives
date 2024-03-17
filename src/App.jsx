import './App.css'

import NavbarWithSearch from './SharedComp/Navbar'
import Home from './Components/HomePage/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavbarWithSearch />
      <Home />

      <Routes>{/* <Route path="Home" element={<Home />} exact /> */}</Routes>
    </>
  )
}

export default App
