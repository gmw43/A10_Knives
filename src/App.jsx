import './App.css'

import HeaderNavbar from './SharedComp/Navbar'
import Home from './Components/HomePage/Home'
import ProductForm from './Components/AdminProduct/UploadProduct'
import { Route, Routes } from 'react-router-dom'
import AddCart from './SharedComp/AddCart'

function App() {
  return (
    <>
      <HeaderNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="AddCart" element={<AddCart />} />
      </Routes>

      {/* <ProductForm /> */}
    </>
  )
}

export default App
