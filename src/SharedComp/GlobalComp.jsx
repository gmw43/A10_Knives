import React, { createContext, useState } from 'react'

export const DataToCart = createContext(null)
const GlobalComp = ({ children }) => {
  const [AddData, setAddData] = useState([])
  return (
    <>
      <DataToCart.Provider value={{ AddData, setAddData }}>
        {children}
      </DataToCart.Provider>
    </>
  )
}

export default GlobalComp
