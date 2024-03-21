import React, { useState, useEffect, useContext } from 'react'
import { DataToCart } from '../../SharedComp/GlobalComp'

function ShowProduct() {
  const { AddData, setAddData } = useContext(DataToCart)
  console.log(AddData)
  const newArray = [...AddData]
  // newArray.push(.)

  const [newdata, setNewdata] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [updatedProduct, setUpdatedProduct] = useState({})
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleDelete = (index) => {
    const updatedData = [...AddData]
    updatedData.splice(index, 1)
    setAddData(updatedData)
    // localStorage.setItem('product data', JSON.stringify(updatedData))
  }

  const handleUpdate = (index) => {
    setIsModalOpen(true)
    setSelectedIndex(index)
    setUpdatedProduct(newdata[index])
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setUpdatedProduct({})
    setSelectedIndex(null)
  }

  const handleSaveUpdate = () => {
    const updatedData = [...newdata]
    updatedData[selectedIndex] = updatedProduct
    setNewdata(updatedData)
    localStorage.setItem('product data', JSON.stringify(updatedData))
    handleCloseModal()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }))
  }

  return (
    <div className="container mx-auto px-4 mt-5">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {newArray.map((product, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                {product.productName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={product.productImage}
                  alt="Product"
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => handleUpdate(index)}
                >
                  Update
                </button>
                <button
                  className="ml-4 text-red-600 hover:text-red-900"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Update Product</h2>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={updatedProduct.name || ''}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full mt-1"
              />
            </label>
            <label className="block mb-2">
              Description:
              <input
                type="text"
                name="description"
                value={updatedProduct.description || ''}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full mt-1"
              />
            </label>
            <label className="block mb-2">
              Price:
              <input
                type="text"
                name="price"
                value={updatedProduct.price || ''}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full mt-1"
              />
            </label>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={handleSaveUpdate}
              >
                Save
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded ml-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowProduct
