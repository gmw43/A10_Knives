import React, { useState, useEffect } from 'react'

const ProductForm = () => {
  const [inpVal, setInpVal] = useState({
    productName: '',
    description: '',
    price: '',
    productImage: '',
  })
  const [productimg, setProductimg] = useState('')

  function handleGetValue(e) {
    const { name, value } = e.target
    setInpVal((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function HandleSubmitt() {
    let productData = JSON.parse(localStorage.getItem('items')) || []
    productData.push(inpVal)

    localStorage.setItem('items', JSON.stringify(productData))

    alert('Dara stored')
    setInpVal({
      productName: '',
      description: '',
      price: '',
      productImage: '',
    })
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setInpVal((prev) => ({
          ...prev,
          productImage: reader.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productName"
            name="productName"
            type="text"
            placeholder="Product Name"
            value={inpVal.productName}
            onChange={handleGetValue}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Description"
            value={inpVal.description}
            onChange={handleGetValue}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
            type="text"
            placeholder="Price"
            value={inpVal.price}
            onChange={handleGetValue}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productImage"
          >
            Product Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productImage"
            name="productImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={HandleSubmitt}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
