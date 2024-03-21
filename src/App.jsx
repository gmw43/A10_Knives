import './App.css'

import HeaderNavbar from './SharedComp/Navbar'
import Home from './Components/HomePage/Home'
import ProductForm from './Components/AdminProduct/UploadProduct'
import { Route, Routes } from 'react-router-dom'
import Overview from './SharedComp/ProductOverview'
import AddCart from './SharedComp/AddCart'
import { useContext, useEffect, useState } from 'react'

import AdminUser from './Components/AdminUserLogin/AdminUser'

function App() {
  return (
    <>
      <HeaderNavbar c />

      <Routes>
        {/* <Route path="/" element={<AdminUser />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Overview" element={<Overview />} />
      </Routes>

      {/* <ProductForm /> */}

      <AddCart />
    </>
  )
}

export default App
