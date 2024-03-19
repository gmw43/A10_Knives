import React, { useState, useEffect } from 'react'

function ShowProduct() {
  const [newdata, setNewdata] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('product data')) || []
    setNewdata(data)
  }, [])

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Product Image</th>
          </tr>
        </thead>
        <tbody>
          {newdata.map((product, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">
                <img src={product.productPic} alt="Product" width="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowProduct
